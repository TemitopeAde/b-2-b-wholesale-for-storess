import { extensions } from '@wix/astro/builders'

export default extensions.sitePlugin({
  id: '62f15cf1-4468-4a2a-961e-9929129970e5',
  name: 'Wholesale Product Pricing',
  marketData: {
    name: 'Wholesale Product Pricing',
    description: 'Marketing Description',
    logoUrl: '{{BASE_URL}}/wholesale-product-pricing-logo.svg',
  },
  placements: [{
    appDefinitionId: 'a0c68605-c2e7-4c8d-9ea1-767f9770e087',
    widgetId: '6a25b678-53ec-4b37-a190-65fcd1ca1a63',
    slotId: 'product-page-details-2',
  }],
  installation: { autoAdd: true },
  tagName: 'wholesale-product-pricing',
  element: './extensions/site/plugins/wholesale-product-pricing/wholesale-product-pricing.tsx',
  settings: './extensions/site/plugins/wholesale-product-pricing/wholesale-product-pricing.panel.tsx',
});
