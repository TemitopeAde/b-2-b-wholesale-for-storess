import type { DataCollection } from '@wix/astro/builders'

export const collectionIdSuffix = 'wholesale-groups';

export default {
  idSuffix: collectionIdSuffix,
  displayName: 'Wholesale Groups',
  fields: [
    {
      type: 'TEXT',
      displayName: 'Name',
      key: 'name',
    },
    {
      type: 'RICH_TEXT', displayName: 'Description', key: 'description',
    },
    { type: 'NUMBER', displayName: 'Minimum Order Value', key: 'minimumOrderValue' },
    { type: 'NUMBER', displayName: 'Default Discount', key: 'defaultDiscount' },
    { type: 'TEXT', displayName: 'Price List ID', key: 'priceListId' },
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
