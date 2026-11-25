import { defineSection } from '../../core/define';
import { words } from './content';

/** Contact wiring: route, layout, and block kinds. Words live in content.ts. */
export const section = defineSection({
  id: 'contact',
  slug: 'contact',
  order: 7,
  lane: 'utility',
  index: '07',
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
    col: 11,
    row: 6,
    colSpan: 2,
    rowSpan: 3,
    code: 'MOD-07',
    subtitle: words.tile.subtitle,
    status: words.tile.status,
    statusPlaceholder: true,
    watermark: '07',
    icon: 'ping',
  },
  blocks: [
    {
      kind: 'fields',
      heading: words.primary.heading,
      items: words.primary.items,
    },
    {
      kind: 'fields',
      heading: words.socials.heading,
      items: words.socials.items,
    },
    {
      kind: 'note',
      body: words.noForm.body,
    },
    {
      kind: 'fields',
      heading: words.callToAction.heading,
      items: words.callToAction.items,
    },
  ],
});

export { default as View } from '../../components/section/SectionView.astro';
