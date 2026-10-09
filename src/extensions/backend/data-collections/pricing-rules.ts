import type { DataCollection } from '@wix/astro/builders'

export const collectionIdSuffix = 'pricing-rules';

export default {
  idSuffix: collectionIdSuffix,
  displayName: 'Pricing Rules',
  fields: [
    {
      type: 'TEXT',
      displayName: 'Name', key: 'name',
    },
    {
      type: 'TEXT', displayName: 'Pricing Type', key: 'pricingType',
    },
    { type: 'NUMBER', displayName: 'Priority', key: 'priority' },
    { type: 'NUMBER', displayName: 'Percentage Discount', key: 'percentageDiscount' },
    { type: 'NUMBER', displayName: 'Amount Discount', key: 'amountDiscount' },
    { type: 'NUMBER', displayName: 'Fixed Price', key: 'fixedPrice' },
    { type: 'ARRAY_STRING', displayName: 'Product IDs', key: 'productIds' },
    { type: 'ARRAY_STRING', displayName: 'Group IDs', key: 'groupIds' },
    { type: 'BOOLEAN', displayName: 'Enabled', key: 'enabled' },
  ],
  displayField: 'name',
  dataPermissions: {
    itemInsert: 'CMS_EDITOR',
    itemRead: 'CMS_EDITOR',
    itemRemove: 'CMS_EDITOR',
    itemUpdate: 'CMS_EDITOR',
  },
  indexes: [],
  initialData: [],
} satisfies DataCollection;
