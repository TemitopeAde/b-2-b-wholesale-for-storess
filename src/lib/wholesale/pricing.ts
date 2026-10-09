import type { PricingRule } from './types';

export interface PriceResult {
  basePrice: number;
  finalPrice: number;
  pricingSource: 'retail' | 'wholesale-rule';
  ruleId?: string;
}

export function calculateWholesalePrice(basePrice: number, productId: string, groupIds: string[], rules: PricingRule[]): PriceResult {
  const rule = rules
    .filter((candidate) => candidate.enabled && (candidate.productIds.length === 0 || candidate.productIds.includes(productId)) && (candidate.groupIds.length === 0 || candidate.groupIds.some((id) => groupIds.includes(id))))
    .sort((a, b) => a.priority - b.priority)[0];
  if (!rule) return { basePrice, finalPrice: basePrice, pricingSource: 'retail' };
  const finalPrice = rule.pricingType === 'percentage' ? basePrice * (1 - (rule.percentageDiscount ?? 0) / 100)
    : rule.pricingType === 'amount' ? basePrice - (rule.amountDiscount ?? 0)
    : rule.fixedPrice ?? basePrice;
  return { basePrice, finalPrice: Math.max(0, Math.round(finalPrice * 100) / 100), pricingSource: 'wholesale-rule', ruleId: rule.id };
}
