import type { DataCollection } from '@wix/astro/builders'

export const collectionIdSuffix = 'wholesale-applications';

export default {
  idSuffix: collectionIdSuffix,
  displayName: 'Wholesale Applications',
  fields: [
    {
      type: 'TEXT',
      displayName: 'Company Name', key: 'companyName',
    },
    {
      type: 'TEXT', displayName: 'Email', key: 'email',
    },
    { type: 'TEXT', displayName: 'Contact Name', key: 'contactName' },
    { type: 'TEXT', displayName: 'Phone', key: 'phone' },
    { type: 'TEXT', displayName: 'Status', key: 'status' },
    { type: 'TEXT', displayName: 'Tax ID', key: 'taxId', encrypted: true },
    { type: 'DOCUMENT', displayName: 'Business License', key: 'businessLicense' },
    { type: 'OBJECT', displayName: 'Custom Fields', key: 'customFields', objectOptions: { fields: [] } },
  ],
  displayField: 'companyName',
  dataPermissions: {
    itemInsert: 'CMS_EDITOR',
    itemRead: 'CMS_EDITOR',
    itemRemove: 'CMS_EDITOR',
    itemUpdate: 'CMS_EDITOR',
  },
  indexes: [],
  initialData: [],
} satisfies DataCollection;
