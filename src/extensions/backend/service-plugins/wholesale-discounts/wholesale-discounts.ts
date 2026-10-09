import { customTriggers } from '@wix/ecom/service-plugins';
import { items } from '@wix/data';
import { auth } from '@wix/essentials';

const wholesaleTriggerId = 'approved-wholesale-customer';
const wholesaleCustomersCollection = '@admin14744/b-2-b-wholesale-for-stores/wholesale-customers';

customTriggers.provideHandlers({
  listTriggers: async () => {
    return {
      customTriggers: [{ _id: wholesaleTriggerId, name: 'Approved wholesale customer' }],
    };
  },
  getEligibleTriggers: async ({ request, metadata }) => {
    const memberId = metadata.identity?.memberId;
    if (!memberId) return { eligibleTriggers: [] };
    const queryCustomers = auth.elevate(items.query);
    const customer = await queryCustomers(wholesaleCustomersCollection)
      .eq('memberId', memberId)
      .eq('status', 'APPROVED')
      .limit(1)
      .find();
    if (customer.items.length === 0) return { eligibleTriggers: [] };
    return {
      eligibleTriggers: (request.triggers ?? [])
        .filter((trigger) => trigger.customTrigger?._id === wholesaleTriggerId)
        .map((trigger) => ({ customTriggerId: wholesaleTriggerId, identifier: trigger.identifier })),
    };
  },
});
