import { extensions } from '@wix/astro/builders'

export default extensions.customElement({
  id: '92cf182d-bd36-4ae3-81a2-bd62f3271614',
  name: 'Wholesale Pricing',
  width: {
    defaultWidth: 450,
    allowStretch: true
  },
  height: {
    defaultHeight: 250
  },
  installation: {
    autoAdd: true
  },
  presets: [
    {
      id: '5db9dedf-ac72-4f54-b468-72c5022906dc',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/wholesale-pricing-thumbnail.png',
    },
  ],
  
  tagName: 'wholesale-pricing',
  element: './extensions/site/widgets/wholesale-pricing/wholesale-pricing.tsx',
  settings: './extensions/site/widgets/wholesale-pricing/wholesale-pricing.panel.tsx',
});
