export type PricingType = 'percentage' | 'amount' | 'fixed' | 'tiered';
export type WholesaleApplicationStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'MORE_INFORMATION_REQUIRED' | 'ARCHIVED';

export interface WholesaleGroup {
  id: string;
  name: string;
  minimumOrderValue: number;
  defaultDiscount: number;
  priceListId?: string;
  enabled: boolean;
}

export interface PricingRule {
  id: string;
  name: string;
  priority: number;
  pricingType: PricingType;
  percentageDiscount?: number;
  amountDiscount?: number;
  fixedPrice?: number;
  productIds: string[];
  groupIds: string[];
  enabled: boolean;
}

export interface QuantityRule {
  productId: string;
  minimumQuantity: number;
  increment: number;
}

export interface CartLine {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface WholesaleTheme {
  background: string;
  text: string;
  muted: string;
  primary: string;
  primaryText: string;
  price: string;
  border: string;
  radius: number;
  fontSize: number;
  spacing: number;
}

export const defaultWholesaleTheme: WholesaleTheme = {
  background: '#ffffff', text: '#1f2937', muted: '#6b7280', primary: '#1d4ed8',
  primaryText: '#ffffff', price: '#15803d', border: '#d1d5db', radius: 8, fontSize: 16, spacing: 16,
};
