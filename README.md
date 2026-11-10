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

No dashboard resource is required. The integration serves `tesla-logger-card.js` and registers it with `add_extra_js_url`.

Add a **Tesla Logger** card and pick any entity from the vehicle. Every block is shown unless `show` says otherwise. A tab disappears when all of its blocks are hidden, and hidden blocks are not requested from the server.

```yaml
type: custom:tesla-logger-card
entity: sensor.red_location
show:
  drives: true
  charges: true
  chart_consumption: true
  chart_distance: true
  chart_energy: true
  totals: true
  battery_health: true
  charging_split: true
  vampire_drain: true
  consumption_vs_temp: true
```

`status` can be set the same way. Omitted keys stay visible. The visual editor exposes the same toggles.

The card has five views:

- Status: battery, range, activity, location, and the main readings
- Drives: distance, duration, and consumption, with a detail view
- Drive detail: Leaflet map (OpenStreetMap tiles) of the RDP route, plus speed, elevation, and battery charts
- Charges and week / month / year stats
- Charts (Graphiques): consumption, distance, and energy charged for the same periods

The map loads tiles in the browser from OpenStreetMap. The server token is not part of that request.

## Development

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

CI checks that `custom_components/tesla_logger/www/tesla-logger-card.js` matches the build.

Tests use a local fake of the read API. They do not talk to a live tesla-logger server.

## Release a change

1. Bump `version` in `custom_components/tesla_logger/manifest.json`. The card cache-buster reads that value. Keep the same version in `pyproject.toml` and `frontend/package.json`.
2. Merge to `main`.
3. The release workflow tags `v<version>` and publishes a GitHub Release with generated notes when that tag does not already exist.

## License

MIT. tesla-logger itself is AGPL-3.0-only; this project only speaks to its HTTP API.
