import type { DataCollection } from '@wix/astro/builders'

export const collectionIdSuffix = 'wholesale-customers';

export default {
  idSuffix: collectionIdSuffix,
  displayName: 'Wholesale Customers',
  fields: [
    {
      type: 'TEXT',
      displayName: 'Member ID', key: 'memberId',
    },
    {
      type: 'TEXT', displayName: 'Contact ID', key: 'contactId',
    },
    { type: 'TEXT', displayName: 'Group ID', key: 'groupId' },
    { type: 'TEXT', displayName: 'Status', key: 'status' },
    { type: 'BOOLEAN', displayName: 'Tax Exempt', key: 'taxExempt' },
  ],
  displayField: 'memberId',
  dataPermissions: {
    itemInsert: 'CMS_EDITOR',
    itemRead: 'CMS_EDITOR',
    itemRemove: 'CMS_EDITOR',
    itemUpdate: 'CMS_EDITOR',
  },
  indexes: [],
  initialData: [],
} satisfies DataCollection;
