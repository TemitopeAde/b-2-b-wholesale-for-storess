import { extensions } from '@wix/astro/builders'

export default extensions.customElement({
  id: 'bb480330-2b64-4901-b6aa-94f1cb4b00e8',
  name: 'Wholesale Account',
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
      id: '33845cd6-cd8c-42fc-9449-87ef7cea2d38',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/wholesale-account-thumbnail.png',
    },
  ],
  
  tagName: 'wholesale-account',
  element: './extensions/site/widgets/wholesale-account/wholesale-account.tsx',
  settings: './extensions/site/widgets/wholesale-account/wholesale-account.panel.tsx',
});
