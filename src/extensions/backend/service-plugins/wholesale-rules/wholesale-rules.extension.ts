import { extensions } from '@wix/astro/builders'

export default extensions.ecomValidations({
  id: 'abbc20a6-2f08-4563-ae34-2a947ab57ae9',
  name: 'wholesale-rules',
  validateInCart: false,
  source: './extensions/backend/service-plugins/wholesale-rules/wholesale-rules.ts',
});
