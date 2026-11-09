export type Lang = "en" | "fr";

const EN = {
  status: "Status",
  drives: "Drives",
  charges: "Charges",
  stats: "Stats",
  range: "Range",
  speed: "Speed",
  power: "Power",
  inside: "Inside",
  outside: "Outside",
  charger: "Charger",
  added: "Added",
  odometer: "Odometer",
  limit: "Limit",
  location: "Location",
  unknown: "Unknown",
  loading: "Loading…",
  emptyDrives: "No drives in this page.",
  emptyCharges: "No charges in this page.",
  back: "Back",
  refresh: "Refresh",
  week: "Week",
  month: "Month",
  year: "Year",
  distance: "Distance",
  duration: "Duration",
  energy: "Energy",
  efficiency: "Efficiency",
  drivesCount: "Drives",
  chargesCount: "Charges",
  energyAdded: "Energy added",
  map: "Route",
  speedChart: "Speed",
  elevationChart: "Elevation",
  batteryChart: "Battery",
  noRoute: "This drive has no route points.",
  pick: "Select a Tesla Logger entity in the card editor.",
  missingDevice: "This entity is not linked to a Tesla Logger device.",
  failed: "Could not load history.",
  previous: "Previous",
  next: "Next",
  page: "Page",
  online: "Online",
  asleep: "Asleep",
  offline: "Offline",
  driving: "Driving",
  charging: "Charging",
  updating: "Updating",
  entity: "Entity",
  defaultView: "Default view",
};

const FR: typeof EN = {
  ...EN,
  status: "État",
  drives: "Trajets",
  charges: "Charges",
  stats: "Stats",
  range: "Autonomie",
  speed: "Vitesse",
  power: "Puissance",
  inside: "Intérieur",
  outside: "Extérieur",
  charger: "Chargeur",
  added: "Ajoutée",
  odometer: "Odomètre",
  limit: "Limite",
  location: "Lieu",
  unknown: "Inconnu",
  loading: "Chargement…",
  emptyDrives: "Aucun trajet sur cette page.",
  emptyCharges: "Aucune charge sur cette page.",
  back: "Retour",
  refresh: "Actualiser",
  week: "Semaine",
  month: "Mois",
  year: "Année",
  distance: "Distance",
  duration: "Durée",
  energy: "Énergie",
  efficiency: "Efficacité",
  drivesCount: "Trajets",
  chargesCount: "Charges",
  energyAdded: "Énergie ajoutée",
  map: "Tracé",
  speedChart: "Vitesse",
  elevationChart: "Altitude",
  batteryChart: "Batterie",
  noRoute: "Ce trajet n'a pas de tracé.",
  pick: "Choisissez une entité Tesla Logger dans l'éditeur.",
  missingDevice: "Cette entité n'est pas liée à un appareil Tesla Logger.",
  failed: "Impossible de charger l'historique.",
  previous: "Précédent",
  next: "Suivant",
  page: "Page",
  online: "En ligne",
  asleep: "Endormie",
  offline: "Hors ligne",
  driving: "En route",
  charging: "En charge",
  updating: "Mise à jour",
  entity: "Entité",
  defaultView: "Vue par défaut",
};

export type Copy = typeof EN;

export function language(code: string | undefined): Lang {
  return (code || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function copy(lang: Lang): Copy {
  return lang === "fr" ? FR : EN;
}

export function activityLabel(text: Copy, activity: string): string {
  const known = activity as keyof Pick<
    Copy,
    "online" | "asleep" | "offline" | "driving" | "charging" | "updating"
  >;
  return text[known] || activity || text.unknown;
}
