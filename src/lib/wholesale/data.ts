import { items } from '@wix/data';

const namespace = '@admin14744/b-2-b-wholesale-for-stores';
export const collections = {
  groups: `${namespace}/wholesale-groups`,
  applications: `${namespace}/wholesale-applications`,
  pricingRules: `${namespace}/pricing-rules`,
  moqRules: `${namespace}/moq-rules`,
} as const;

export type DataItem = { _id: string; _createdDate?: Date; [key: string]: unknown };

export async function listItems(collectionId: string): Promise<DataItem[]> {
  const result = await items.query(collectionId).descending('_createdDate').limit(100).find({ returnTotalCount: true });
  return result.items as DataItem[];
}

export async function createItem(collectionId: string, values: Record<string, unknown>) {
  return items.insert(collectionId, values);
}

export async function removeItem(collectionId: string, id: string) { return items.remove(collectionId, id); }
