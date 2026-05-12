import { MeasurementSystem } from "./region-config";

/**
 * Formats a price value into the local currency.
 */
export function formatCurrency(amount: number, currency: string, locale: string = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

/**
 * Measurement Conversion Helpers
 */
export const units = {
  kgToLbs: (kg: number) => kg * 2.20462,
  lbsToKg: (lbs: number) => lbs / 2.20462,
  cmToInches: (cm: number) => cm / 2.54,
  inchesToCm: (inches: number) => inches * 2.54,
};

/**
 * Formats height based on the measurement system.
 */
export function formatHeight(cm: number, system: MeasurementSystem): string {
  if (system === "imperial") {
    const totalInches = units.cmToInches(cm);
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  }
  return `${Math.round(cm)} cm`;
}

/**
 * Formats weight based on the measurement system.
 */
export function formatWeight(kg: number, system: MeasurementSystem): string {
  if (system === "imperial") {
    return `${Math.round(units.kgToLbs(kg))} lbs`;
  }
  return `${Math.round(kg)} kg`;
}
