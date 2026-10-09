import { useCallback, useEffect, useState } from 'react';
import { widget } from '@wix/editor';

type ThemeKey = 'background' | 'primary' | 'text' | 'button-label';
const defaults: Record<ThemeKey, string> = { background: '#ffffff', primary: '#1d4ed8', text: '#1f2937', 'button-label': 'Continue' };

export function WholesaleWidgetSettings({ title }: { title: string }) {
  const [values, setValues] = useState(defaults);
  useEffect(() => { Promise.all((Object.keys(defaults) as ThemeKey[]).map(async (key) => [key, await widget.getProp(key)] as const)).then((entries) => setValues((current) => Object.fromEntries(entries.map(([key, value]) => [key, value || current[key]])) as Record<ThemeKey, string>)).catch((error: unknown) => console.error('Unable to load widget settings', error)); }, []);
  const update = useCallback((key: ThemeKey, value: string) => { setValues((current) => ({ ...current, [key]: value })); widget.setProp(key, value).catch((error: unknown) => console.error('Unable to save widget setting', error)); }, []);
  return <section style={{ padding: 16, fontFamily: 'Arial, sans-serif' }}><h2>{title}</h2><p style={{ color: '#64748b', fontSize: 14 }}>Changes update this widget immediately in the Editor.</p>{(Object.keys(defaults) as ThemeKey[]).map((key) => <label key={key} style={{ display: 'block', marginTop: 16, fontSize: 14, fontWeight: 600 }}>{key === 'button-label' ? 'Button label' : key[0]?.toUpperCase() + key.slice(1)}<input value={values[key]} onChange={(event) => update(key, event.target.value)} style={{ display: 'block', width: '100%', marginTop: 6, padding: 8, border: '1px solid #cbd5e1', borderRadius: 6 }} /></label>)}</section>;
}
