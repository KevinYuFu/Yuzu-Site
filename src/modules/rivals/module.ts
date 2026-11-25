import { defineSection } from '../../core/define';
import { words } from './content';

/** Rivals wiring: route, layout, and block kinds. Words live in content.ts. */
export const section = defineSection({
  id: 'rivals',
  slug: 'rivals',
  order: 5,
  lane: 'identity',
  index: '05',
  navLabel: words.navLabel,
  title: words.title,
  mark: words.mark,
  kana: words.kana,
  signal: words.signal,
  description: words.description,
  lede: words.lede,
  homeBlurb: words.homeBlurb,
  tile: {
    size: 'mid',
    col: 5,
    row: 6,
    colSpan: 4,
    rowSpan: 3,
    code: 'MOD-05',
    subtitle: words.tile.subtitle,
    status: words.tile.status,
    watermark: '05',
    icon: 'mark',
  },
  blocks: [
    {
      kind: 'copy',
      heading: words.whatItIs.heading,
      body: words.whatItIs.body,
    },
    {
      kind: 'copy',
      heading: words.whyItExists.heading,
      body: words.whyItExists.body,
    },
    {
      kind: 'copy',
      heading: words.format.heading,
      body: words.format.body,
    },
    {
      kind: 'fields',
      heading: words.whenAndWhere.heading,
      items: words.whenAndWhere.items,
    },
    {
      kind: 'fields',
      heading: words.getInvolved.heading,
      items: words.getInvolved.items,
    },
    {
      kind: 'fields',
      heading: words.links.heading,
      items: words.links.items,
    },
    {
      kind: 'note',
      body: words.untilSupplied.body,
    },
  ],
});

export { default as View } from '../../components/section/SectionView.astro';
