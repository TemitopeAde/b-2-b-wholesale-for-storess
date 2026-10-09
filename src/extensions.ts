import { app } from '@wix/astro/builders';
import myPage from './extensions/dashboard/pages/my-page/my-page.extension.ts';

import wholesaleQuickOrder from './extensions/site/widgets/wholesale-quick-order/wholesale-quick-order.extension.ts';

import wholesaleApplication from './extensions/site/widgets/wholesale-application/wholesale-application.extension.ts';
import wholesaleCatalog from './extensions/site/widgets/wholesale-catalog/wholesale-catalog.extension.ts';
import wholesalePricing from './extensions/site/widgets/wholesale-pricing/wholesale-pricing.extension.ts';

import wholesaleAccount from './extensions/site/widgets/wholesale-account/wholesale-account.extension.ts';

import wholesaleRules from './extensions/backend/service-plugins/wholesale-rules/wholesale-rules.extension.ts';

import dataCollections from './extensions/backend/data-collections/data-collections.extension.ts';

import wholesaleDiscounts from './extensions/backend/service-plugins/wholesale-discounts/wholesale-discounts.extension.ts';

import wholesaleProductPricing from './extensions/site/plugins/wholesale-product-pricing/wholesale-product-pricing.extension.ts';

import appInstalled from './extensions/backend/events/app-installed/app-installed.extension.ts';

import paidPlanPurchased from './extensions/backend/events/paid-plan-purchased/paid-plan-purchased.extension.ts';

import paidPlanChanged from './extensions/backend/events/paid-plan-changed/paid-plan-changed.extension.ts';

export default app()
  .use(myPage)
  .use(wholesaleQuickOrder)
  .use(wholesaleApplication)
  .use(wholesaleCatalog)
  .use(wholesalePricing)
  .use(wholesaleAccount)
  .use(wholesaleRules).use(dataCollections).use(wholesaleDiscounts).use(wholesaleProductPricing).use(appInstalled).use(paidPlanPurchased).use(paidPlanChanged);
