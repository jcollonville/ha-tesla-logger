# Développement

Lancer l'intégration dans une instance Home Assistant locale, la modifier, exécuter les mêmes contrôles que la CI, puis publier une version que HACS peut installer.

Les commandes partent de la racine du dépôt.

## Instance locale

### Python

`pip install homeassistant` installe la dernière version publiée sur PyPI. Depuis Home Assistant 2026.3, et donc pour 2026.11, il faut Python **3.14.2** ou plus récent. Home Assistant 2026.1 et 2026.2 exigeaient Python 3.13.2.

```bash
python3.14 -m venv .venv
source .venv/bin/activate
pip install homeassistant
```

`.venv/` est ignoré par git. Cet environnement sert à lancer `hass`. Les tests CI utilisent un autre Python, décrit plus bas.

### Lien vers l'intégration

Home Assistant charge les intégrations personnalisées depuis `<config>/custom_components`.

```bash
mkdir -p dev-config/custom_components
ln -s ../../custom_components/tesla_logger dev-config/custom_components/tesla_logger
```

Le lien relatif vise `custom_components/tesla_logger`. `dev-config/` est ignoré par git.

### Démarrage

```bash
hass -c dev-config --debug
```

Ouvrir http://localhost:8123. Au premier lancement, Home Assistant demande de créer le compte propriétaire.

Ajouter l'intégration **Tesla Logger** : **Paramètres → Appareils et services → Ajouter une intégration**. Le formulaire demande :

- **URL du serveur**, par exemple `https://tsl.example.com`
- **Jeton API** : un jeton dédié créé dans l'interface web de Tesla Logger (page de statut). Il a la forme `tl_...` et se révoque depuis cette même interface. Le jeton reste dans Home Assistant ; le navigateur ne le reçoit pas.

Le serveur est en lecture seule. L'intégration n'envoie aucune commande au véhicule.

## Boucle de modification

Les changements Python dans `custom_components/tesla_logger` sont pris en compte en redémarrant `hass`, ou en rechargeant l'intégration depuis **Appareils et services** (menu de Tesla Logger, **Recharger**). Un redémarrage recharge l'ensemble des modules.

La carte servie est `custom_components/tesla_logger/www/tesla-logger-card.js` (`/tesla_logger/tesla-logger-card.js`). Les sources sont dans `frontend/` : après modification, `npm run build` régénère ce fichier. Un rafraîchissement forcé du navigateur (**Ctrl+Shift+R**) suffit ensuite ; `hass` continue de tourner. L'URL de la carte porte `?v=` suivi de la version du manifeste. Tant que cette version ne change pas, le navigateur peut garder l'ancien script, d'où le rafraîchissement forcé.

### Journaux

Dans `dev-config/configuration.yaml` :

```yaml
logger:
  logs:
    custom_components.tesla_logger: debug
```

Redémarrer `hass` pour appliquer `configuration.yaml`. Avec `--debug`, la sortie du processus affiche ces lignes.

## Tests

Le job Python de `.github/workflows/ci.yml` utilise Python **3.12**, installe `requirements_test.txt`, puis lance Ruff et pytest. Ce fichier épingle `pytest-homeassistant-custom-component==0.13.205`, qui installe Home Assistant **2025.1.4** (Python >= 3.12). Lancer ces commandes dans un shell où `.venv` n'est pas activé. Le dossier `venv/` est ignoré.

```bash
python3.12 -m venv venv
source venv/bin/activate
pip install -r requirements_test.txt
ruff check .
ruff format --check .
pytest
```

Les tests s'appuient sur un faux serveur de l'API de lecture. Ils ne contactent pas une instance tesla-logger.

### Carte

Le job Lovelace utilise Node.js **22** et, dans `frontend/`, les mêmes scripts que la CI :

```bash
cd frontend
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

La CI échoue si `custom_components/tesla_logger/www/tesla-logger-card.js` diffère du build, ou si ce fichier importe encore `lit` ou `leaflet` :

```bash
git diff --exit-code -- custom_components/tesla_logger/www/tesla-logger-card.js
```

Commiter `custom_components/tesla_logger/www/tesla-logger-card.js` avec les sources. HACS installe ce fichier tel quel et n'exécute pas Node.

## Publier

1. Incrémenter `version` dans `custom_components/tesla_logger/manifest.json`. La carte est servie avec `?v=` égal à cette valeur. Reprendre la même version dans `pyproject.toml` et `frontend/package.json`.
2. Merger sur `main`.
3. `.github/workflows/release.yml` s'exécute à chaque push sur `main`. Si la version du manifeste a changé et que le tag `v<version>` n'existe pas encore, le workflow crée ce tag et une GitHub Release dont les notes sont générées.
4. HACS propose alors la mise à jour de **Tesla Logger**. L'installer, puis redémarrer Home Assistant. L'intégration et la carte sont remplacées ensemble.
