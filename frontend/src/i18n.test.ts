import { describe, expect, it } from "vitest";

import { copy, language } from "./i18n";

describe("card language", () => {
  it("uses French for fr locales and English otherwise", () => {
    expect(language("fr")).toBe("fr");
    expect(language("fr-FR")).toBe("fr");
    expect(language("fr_FR")).toBe("fr");
    expect(language("de")).toBe("en");
    expect(language("en")).toBe("en");
    expect(language(undefined)).toBe("en");
    expect(language("")).toBe("en");
  });

  it("translates the card chrome in French and falls back to English", () => {
    const fr = copy("fr");
    expect(fr.overview).toBe("Aperçu");
    expect(fr.status).toBe("État");
    expect(fr.drives).toBe("Trajets");
    expect(fr.stats).toBe("Stats");
    expect(fr.charts).toBe("Graphiques");
    expect(fr.drivingGroup).toBe("Déplacement");
    expect(fr.cabinGroup).toBe("Habitacle");
    expect(fr.chargeGroup).toBe("Charge");
    expect(fr.moreCharts).toBe("Autres graphiques");
    expect(fr.consumptionChart).toBe("Consommation");
    expect(fr.emptyDrives).toBe("Aucun trajet sur cette page.");
    expect(fr.emptyCharges).toBe("Aucune charge sur cette page.");
    expect(fr.failed).toBe("Impossible de charger l'historique.");
    expect(fr.noRoute).toBe("Ce trajet n'a pas de tracé.");
    expect(fr.viewsGroup).toBe("Vues");
    expect(fr.defaultView).toBe("Vue par défaut");
    expect(fr.back).toBe("Retour");
    expect(fr.perDay).toBe("km/j");
    expect(fr.carImageUnavailable).toBe("Image du véhicule indisponible");

    const en = copy(language("de"));
    expect(en.drivingGroup).toBe("Driving");
    expect(en.cabinGroup).toBe("Cabin");
    expect(en.chargeGroup).toBe("Charging");
    expect(en.moreCharts).toBe("More charts");
    expect(en.stats).toBe("Stats");
    expect(en.emptyDrives).toBe("No drives in this page.");
    expect(en.perDay).toBe("km/day");
    expect(en.carImageUnavailable).toBe("Vehicle image unavailable");
  });
});
