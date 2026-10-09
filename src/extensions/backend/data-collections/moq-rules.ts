import type { DataCollection } from '@wix/astro/builders'

export const collectionIdSuffix = 'moq-rules';

export default {
  idSuffix: collectionIdSuffix,
  displayName: 'MOQ Rules',
  fields: [
    {
      type: 'TEXT',
      displayName: 'Product ID', key: 'productId',
    },
    {
      type: 'TEXT', displayName: 'Variant ID', key: 'variantId',
    },
    { type: 'NUMBER', displayName: 'Minimum Quantity', key: 'minimumQuantity' },
    { type: 'NUMBER', displayName: 'Increment', key: 'increment' },
    { type: 'TEXT', displayName: 'Group ID', key: 'groupId' },
    { type: 'BOOLEAN', displayName: 'Enabled', key: 'enabled' },
  ],
  displayField: 'productId',
  dataPermissions: {
    itemInsert: 'CMS_EDITOR',
    itemRead: 'CMS_EDITOR',
    itemRemove: 'CMS_EDITOR',
    itemUpdate: 'CMS_EDITOR',
  },
  indexes: [],
  initialData: [],
} satisfies DataCollection;
