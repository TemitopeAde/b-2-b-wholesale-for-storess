import { defaultWholesaleTheme } from './types';

export function widgetMarkup(title: string, body: string, attributes: NamedNodeMap): string {
  const get = (name: string, fallback: string) => attributes.getNamedItem(name)?.value || fallback;
  const theme = { ...defaultWholesaleTheme, background: get('background', defaultWholesaleTheme.background), primary: get('primary', defaultWholesaleTheme.primary), text: get('text', defaultWholesaleTheme.text) };
  return `<section style="box-sizing:border-box;width:100%;min-height:100%;padding:${theme.spacing}px;background:${theme.background};color:${theme.text};font-family:Arial,sans-serif;font-size:${theme.fontSize}px;border:1px solid ${theme.border};border-radius:${theme.radius}px"><h2 style="margin:0 0 12px">${title}</h2>${body}<button type="button" style="margin-top:16px;border:0;border-radius:${theme.radius}px;background:${theme.primary};color:${theme.primaryText};padding:10px 16px;font:inherit;cursor:pointer">${get('button-label', 'Continue')}</button></section>`;
}
