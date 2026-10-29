import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';

export const section = defineSection({
  id: 'mixing',
  slug: 'mixing',
  order: 3,
  lane: 'identity',
  index: '03',
  navLabel: 'Mixing',
  title: 'Mixing & Mastering',
  mark: 'MASTER',
  kana: 'マスタリング',
  signal: 'SIG.MIX // MASTER.SYS',
  description: 'Mixing and mastering by Yu Fu.',
  lede: 'Mixing and mastering. Services, credits, and rates are not filled in yet.',
  homeBlurb: 'Mixing & mastering',
  tile: {
    size: 'mid',
    col: 8,
    row: 4,
    colSpan: 5,
    rowSpan: 2,
    code: 'MOD-03',
    subtitle: 'Mastering',
    status: 'Mixing & mastering',
    watermark: '03',
    icon: 'fader',
  },
  source: 'no content file yet',
  blocks: [
    {
      kind: 'copy',
      heading: 'Practice',
      body: gap('what the mixing and mastering work covers'),
    },
    {
      kind: 'fields',
      heading: 'Services',
      items: [
        { label: 'Offered', value: gap('services') },
        { label: 'Turnaround', value: gap('turnaround') },
        { label: 'Rates', value: gap('rates or "inquire"') },
      ],
    },
    {
      kind: 'stack',
      heading: 'Credits',
      items: [
        {
          title: gap('credit or project'),
          rows: [
            { label: 'Client', value: gap('client') },
            { label: 'Role', value: gap('mix, master, or both') },
            { label: 'Link', value: gap('link') },
          ],
        },
      ],
    },
    {
      kind: 'fields',
      heading: 'Book',
      items: [
        { label: 'How to start', value: gap('how to start a project') },
        { label: 'Email', value: gap('public email') },
      ],
    },
    {
      kind: 'note',
      body: text('No clients, credits, or prices are invented on this page.'),
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
