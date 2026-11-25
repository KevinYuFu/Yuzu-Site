import { defineSection } from '../../core/define';
import { words } from './content';

/** About wiring: route, layout, and block kinds. Words live in content.ts. */
export const section = defineSection({
  id: 'about',
  slug: 'about',
  order: 6,
  lane: 'utility',
  index: '06',
  navLabel: words.navLabel,
  title: words.title,
  mark: words.mark,
  kana: words.kana,
  signal: words.signal,
  description: words.description,
  lede: words.lede,
  homeBlurb: words.homeBlurb,
  tile: {
    size: 'small',
    col: 9,
    row: 6,
    colSpan: 2,
    rowSpan: 3,
    code: 'MOD-06',
    subtitle: words.tile.subtitle,
    status: words.tile.status,
    watermark: '06',
    icon: 'id',
  },
  blocks: [
    {
      kind: 'fields',
      heading: words.name.heading,
      items: words.name.items,
    },
    {
      kind: 'copy',
      heading: words.who.heading,
      body: words.who.body,
    },
    {
      kind: 'copy',
      heading: words.values.heading,
      body: words.values.body,
    },
    {
      kind: 'stack',
      heading: words.funFacts.heading,
      items: words.funFacts.items,
    },
    {
      kind: 'registry',
      heading: words.signals.heading,
      lanes: ['identity'],
    },
  ],
});

export { default as View } from '../../components/section/SectionView.astro';
