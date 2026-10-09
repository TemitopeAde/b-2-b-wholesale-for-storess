import type { CartLine, QuantityRule } from './types';

export interface WholesaleViolation { lineId?: string; code: string; message: string; }

export function validateWholesaleCart(lines: CartLine[], rules: QuantityRule[], minimumOrderValue: number): WholesaleViolation[] {
  const violations: WholesaleViolation[] = [];
  for (const line of lines) {
    const rule = rules.find((candidate) => candidate.productId === line.productId);
    if (!rule) continue;
    if (line.quantity < rule.minimumQuantity) violations.push({ lineId: line.id, code: 'MOQ', message: `Minimum wholesale quantity is ${rule.minimumQuantity}.` });
    else if ((line.quantity - rule.minimumQuantity) % rule.increment !== 0) violations.push({ lineId: line.id, code: 'INCREMENT', message: `This item must be purchased in multiples of ${rule.increment} after the minimum quantity.` });
  }
  const subtotal = lines.reduce((total, line) => total + line.quantity * line.unitPrice, 0);
  if (subtotal < minimumOrderValue) violations.push({ code: 'MINIMUM_ORDER', message: `Wholesale minimum order is $${minimumOrderValue.toFixed(2)}. Add $${(minimumOrderValue - subtotal).toFixed(2)} more to continue.` });
  return violations;
}
