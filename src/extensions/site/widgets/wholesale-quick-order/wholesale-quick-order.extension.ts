import { extensions } from '@wix/astro/builders'

export default extensions.customElement({
  id: '7fe0d107-2010-4395-ae9a-9f3580149aa6',
  name: 'Quick Order',
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
      id: 'f450ade1-6951-4950-8058-320b6ca2deff',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/wholesale-quick-order-thumbnail.png',
    },
  ],
  
  tagName: 'wholesale-quick-order',
  element: './extensions/site/widgets/wholesale-quick-order/wholesale-quick-order.tsx',
  settings: './extensions/site/widgets/wholesale-quick-order/wholesale-quick-order.panel.tsx',
});
