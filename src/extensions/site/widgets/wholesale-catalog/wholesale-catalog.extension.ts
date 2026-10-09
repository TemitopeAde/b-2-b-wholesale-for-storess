import { extensions } from '@wix/astro/builders'

export default extensions.customElement({
  id: 'c9bc4cf3-5906-4acd-bb1d-b7c3c6e76140',
  name: 'Wholesale Catalog',
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
      id: '651610ce-76b6-4fc4-b2ec-b4d887339129',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/wholesale-catalog-thumbnail.png',
    },
  ],
  
  tagName: 'wholesale-catalog',
  element: './extensions/site/widgets/wholesale-catalog/wholesale-catalog.tsx',
  settings: './extensions/site/widgets/wholesale-catalog/wholesale-catalog.panel.tsx',
});
