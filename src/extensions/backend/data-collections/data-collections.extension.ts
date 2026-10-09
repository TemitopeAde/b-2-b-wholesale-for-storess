import { extensions } from '@wix/astro/builders'

import wholesaleGroupsCollection from './wholesale-groups';

import pricingRulesCollection from './pricing-rules';

import wholesaleApplicationsCollection from './wholesale-applications';

import moqRulesCollection from './moq-rules';

import wholesaleCustomersCollection from './wholesale-customers';

export default extensions.dataCollections({
  id: 'caebd8ca-5a00-4b7a-953d-285832ec67c2',
  name: 'Data Collections',
  collections: [
    wholesaleGroupsCollection,
    pricingRulesCollection,
    wholesaleApplicationsCollection,
    moqRulesCollection,
    wholesaleCustomersCollection
  ],
});
