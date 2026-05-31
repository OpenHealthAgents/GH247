import { RegionConfig } from "./region-config";

export interface PlanPriceRow {
  country: string;
  currency: string;
  amount: number;
}

export function getPlanPriceForRegion(
  prices: PlanPriceRow[],
  region: Pick<RegionConfig, "country">
) {
  const price =
    prices.find((item) => item.country === region.country) ||
    prices.find((item) => item.country === "US") ||
    prices[0];

  if (!price) {
    throw new Error("Plan is missing country pricing.");
  }

  return price;
}

export function getCountryPriceMap(prices: PlanPriceRow[]) {
  return prices.reduce<Record<string, number>>((result, price) => {
    result[price.country] = price.amount;
    return result;
  }, {});
}

export function getCountryCurrencyMap(prices: PlanPriceRow[]) {
  return prices.reduce<Record<string, string>>((result, price) => {
    result[price.country] = price.currency;
    return result;
  }, {});
}

export function getStartingMonthlyPriceFromRows<
  T extends { durationMonths: number; prices: PlanPriceRow[] }
>(plans: T[], region: Pick<RegionConfig, "country">) {
  if (plans.length === 0) {
    return null;
  }

  return Math.min(
    ...plans.map((plan) => {
      const price = getPlanPriceForRegion(plan.prices, region);
      return price.amount / plan.durationMonths;
    })
  );
}

export function getConsultationFee(currency: string) {
  return currency === "INR" ? 300 : 0;
}

export function getShippingFee(currency: string) {
  return currency === "INR" ? 100 : 0;
}

export function getOrderTotal(planAmount: number, currency: string) {
  return planAmount + getConsultationFee(currency) + getShippingFee(currency);
}
