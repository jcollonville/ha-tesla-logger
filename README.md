<img src="https://raw.githubusercontent.com/jcollonville/ha-tesla-logger/main/images/icon.png" alt="Tesla Logger" width="128">

# Tesla Logger

Home Assistant integration and Lovelace card for the self-hosted [tesla-logger](https://github.com/jcollonville/tesla-rs) server. The server is read-only: this integration does not send vehicle commands.

The card loads automatically with the integration. History requests go through Home Assistant services, so the API token never reaches the browser.

## Requirements

- Home Assistant 2024.11 or newer
- A reachable tesla-logger server (for example `http://192.168.10.50:8099`)
- An API token created on the server status page (`tl_...`)

Distances from the server are kilometres. The integration reports metric units and lets Home Assistant convert them for the user profile.

## Install with HACS

1. In HACS, open **Custom repositories**.
2. Add `https://github.com/jcollonville/ha-tesla-logger` with category **Integration**.
3. Download **Tesla Logger** and restart Home Assistant.

HACS installs the `custom_components/tesla_logger` folder from the GitHub release. The Lovelace card is inside that folder and is served by the integration, so no dashboard resource is required. An update replaces the integration and the card together.

## Updating

When a newer release exists, HACS shows an update for **Tesla Logger**. Install it and restart Home Assistant. The integration registers the card as `/tesla_logger/tesla-logger-card.js?v=<version>`, where `<version>` is `version` from `manifest.json`, so the browser loads the card that shipped with that release.

## Manual install

Copy `custom_components/tesla_logger` into `config/custom_components/tesla_logger` and restart Home Assistant.

## Configure

1. Go to **Settings → Devices & services → Add integration → Tesla Logger**.
2. Enter the server URL and the API token.
3. Optional: open **Configure** to set the REST poll interval and to turn the live WebSocket on or off.

The WebSocket (`GET /api/v1/ws`, `Authorization: Bearer`) pushes live `state` frames and reconnects with backoff. REST polling still runs on the scan interval because the socket payload is a subset of `GET /api/v1/vehicles/{id}/state`. If the socket drops, REST polling keeps the entities updating.

Reload the integration after a vehicle appears on the server. Discovery also checks the vehicle list on each scan interval.

## Entities

Each vehicle is one device.

| Entity | Unit / device class |
| --- | --- |
| Battery, usable battery | % battery |
| Range, ideal range, estimated range | km distance |
| Odometer | km, total increasing |
| Speed | km/h |
| Power, charger power | kW |
| Inside / outside temperature | °C |
| Charging state, shift state, software version | text |
| Charger voltage / current | V / A |
| Energy added | kWh, total increasing |
| Charge limit | % |
| State | online, asleep, offline, driving, charging, updating |
| Plugged in | plug (on = cable connected) |
| Lock | lock device class (off = locked, on = unlocked) |
| Sentry mode | on = enabled |
| Doors, windows, frunk, trunk | created only when the payload includes them; on = open |
| Tire pressures | bar |
| Location | GPS device tracker |
| Geofence | name of the server geofence containing the car |
| Last drive | distance, duration, energy, Wh/km |
| Last charge | energy added, duration |

tesla-logger 0.1 stores more columns than its state endpoint returns. Charger voltage and current, charge limit, lock, sentry, tire pressures, and openings stay `unknown` (or are not created, for openings) until a state or WebSocket payload includes those keys. Plugged in is derived from `charging_state` when no explicit flag is present.

## Services

All six services require a response (`SupportsResponse.ONLY`) and take the Home Assistant device id of the vehicle. They proxy the server and return its JSON.

- `tesla_logger.get_drives` — `device_id`, optional `from`, `to`, `page`, `per_page`
- `tesla_logger.get_drive` — `device_id`, `drive_id`, optional `max_points` (route from `/api/v1/drives/{id}`)
- `tesla_logger.get_charges` — same paging fields as drives
- `tesla_logger.get_stats` — `device_id`, optional `from`, `to`
- `tesla_logger.get_stats_series` — `device_id`, `period` (`week`, `month`, or `year`), optional `count` (buckets from `/api/v1/vehicles/{id}/stats/series`, oldest first)
- `tesla_logger.get_consumption_by_temp` — same `period` and `count`; Wh/km by 5°C bin from `/api/v1/vehicles/{id}/stats/consumption_by_temp`

```yaml
action: tesla_logger.get_stats
data:
  device_id: abc123
  from: "2026-11-01T00:00:00+00:00"
  to: "2026-11-09T00:00:00+00:00"
response_variable: tesla_stats
```

## Lovelace card

No dashboard resource is required. The integration serves `/tesla_logger/` and registers `tesla-logger-card.js` with `add_extra_js_url`. That file is a small loader. The card and Leaflet download only when a card is shown, and Home Assistant serves the precompressed `.gz` / `.br` siblings.

Add a **Tesla Logger** card and pick any entity from the vehicle. Every block is shown unless `show` says otherwise. A tab disappears when all of its blocks are hidden, and hidden blocks are not requested from the server.

```yaml
type: custom:tesla-logger-card
entity: sensor.red_location
show_map: true
page_size: 10
show:
  car: true
  status: true
  drives: true
  charges: true
  stats: true
  charts: true
  chart_consumption: true
  chart_distance: true
  chart_energy: true
  totals: true
  battery_health: true
  charging_split: true
  vampire_drain: true
  consumption_vs_temp: true
drive_detail:
  distance: true
  duration: true
  energy: true
  efficiency: true
  map: true
  speed: true
  power: true
  elevation: true
  battery: true
charge_detail:
  energy: true
  duration: true
  soc: true
  power: true
  ac_dc: true
  voltage: true
  cost: true
  curve: true
```

Omitted keys stay visible, and `page_size` defaults to 10. Existing configs that only set `show.drives` or `show_map` keep working. The visual editor (sections, chart blocks, drive detail, charge detail, page size) exposes the same toggles, in the dashboard language.

The card is the Tesla Logger console, rendered with the vendored `@jcollonville/tesla-logger-ui` package (currently 0.1.0, MIT OR Apache-2.0). Home Assistant theme variables are mapped onto the `--tl-*` tokens, and the card passes `hass` locale and time zone into the elements. The script is bundled at build time. The browser never loads JavaScript from the Tesla Logger server.

`show_map` defaults to true. The Aperçu place card is a discreet `tl-mini-map`: a dot and, when a drive detail includes a route, a projected path. Latitude and longitude stay in JavaScript properties and are not written into the DOM. The card does not request map tiles. Set `show_map: false` to hide the place card. An optional drive-detail map uses the same projected drawing. It does not call OpenStreetMap or any other tile host.

The vehicle card shows the official render from Home Assistant at `/api/tesla_logger/{entry_id}/{vehicle_id}/car.png`. The card asks Home Assistant to sign that same-origin path; the image request does not carry the server token or a VIN. `{vehicle_id}` is the numeric vehicle id. An older `official_image` key in the card YAML is ignored, and the visual editor does not offer that toggle. If the view returns 404 or 503, or the image fails to load, the card shows “Vehicle image unavailable” / “Image du véhicule indisponible”. It does not draw a fallback car.

The tabs follow the console:

- Aperçu: vehicle card (image, battery, range, charge limit, facts), mini map, last drive, last charge, and this month
- Trajets and Charges: period chips (7 days, 30 days, this year, all), a summary strip, day groups, and an icon pager. The pager sits on the left and the page range on the right. `page_size` defaults to 10
- Stats: Semaines / Mois / Années, the same summary strip, and the console charts (distance, efficiency, energy charged, cost, range at 100%, parked loss, consumption by temperature)

`default_view: charts` still opens Stats. Dates and clocks follow the Home Assistant locale, 12/24-hour setting, and time zone. Drive and charge detail stay available from a row: metrics, `tl-chart` curves, and the projected route when those blocks are enabled.

## Development

Local Home Assistant, the edit loop, tests, and releases: [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) (français).

```bash
pip install -r requirements_test.txt
ruff check .
ruff format --check .
pytest
```

The card source is in `frontend/`. Commit the built file so HACS does not need Node:

```bash
cd frontend
npm ci
npm run lint
npm run typecheck
npm run build
```

CI checks that `custom_components/tesla_logger/www/` matches the build.

Tests use a local fake of the read API. They do not talk to a live tesla-logger server.

## Release a change

1. Bump `version` in `custom_components/tesla_logger/manifest.json`. The card cache-buster reads that value. Keep the same version in `pyproject.toml` and `frontend/package.json`.

To consume a newer `@jcollonville/tesla-logger-ui` release, download its tarball and `SHA256SUMS` into `frontend/vendor/`, update `frontend/vendor/ui-package.json`, point `frontend/package.json` at `file:vendor/<tarball>`, then run `npm install` in `frontend/`. `frontend/scripts/verify-ui.mjs` checks the checksum before tests and the production build. Do not load the package from a server URL at runtime.
2. Merge to `main`.
3. The release workflow tags `v<version>` and publishes a GitHub Release with generated notes when that tag does not already exist.

## License

MIT. tesla-logger itself is AGPL-3.0-only; this project only speaks to its HTTP API.
