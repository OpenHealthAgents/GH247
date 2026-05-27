export interface Plan {
  id: string;
  drugType: "semaglutide" | "liraglutide" | "tirzepatide";
  tier: "affordable" | "standard" | "premium";
  prices: Record<string, number>; // Currency code -> Price
  durationMonths: number;
}

export const AVAILABLE_PLANS: Plan[] = [
  // Semaglutide
  { 
    id: "sema-1", 
    drugType: "semaglutide", 
    tier: "affordable", 
    prices: { USD: 299, GBP: 229, EUR: 279 }, 
    durationMonths: 1
  },
  { 
    id: "sema-3", 
    drugType: "semaglutide", 
    tier: "affordable", 
    prices: { USD: 747, GBP: 573, EUR: 699 }, 
    durationMonths: 3
  },
  { 
    id: "sema-6", 
    drugType: "semaglutide", 
    tier: "affordable", 
    prices: { USD: 1314, GBP: 1008, EUR: 1230 }, 
    durationMonths: 6
  },
  { 
    id: "sema-12", 
    drugType: "semaglutide", 
    tier: "affordable", 
    prices: { USD: 2148, GBP: 1644, EUR: 2010 }, 
    durationMonths: 12
  },
  
  // Tirzepatide
  { 
    id: "tirz-1", 
    drugType: "tirzepatide", 
    tier: "premium", 
    prices: { USD: 399, GBP: 309, EUR: 379 }, 
    durationMonths: 1
  },
  { 
    id: "tirz-3", 
    drugType: "tirzepatide", 
    tier: "premium", 
    prices: { USD: 897, GBP: 690, EUR: 840 }, 
    durationMonths: 3
  },
];


