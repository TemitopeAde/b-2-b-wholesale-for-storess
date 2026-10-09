import { extensions } from '@wix/astro/builders'

export default extensions.customElement({
  id: '4bc79383-1499-40e7-b06c-91edd86ed105',
  name: 'Wholesale Application',
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
      id: '7ed17993-7142-46d9-8f3d-7674cc1d0d12',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/wholesale-application-thumbnail.png',
    },
  ],
  
  tagName: 'wholesale-application',
  element: './extensions/site/widgets/wholesale-application/wholesale-application.tsx',
  settings: './extensions/site/widgets/wholesale-application/wholesale-application.panel.tsx',
});
