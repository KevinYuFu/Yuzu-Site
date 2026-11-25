/**
 * Wiring for the Mixing page. The words are in ./content.
 */
import { defineSection } from '../../core/define';
import { content } from './content';

const { blocks } = content;

export const section = defineSection({
  id: 'mixing',
  slug: 'mixing',
  order: 3,
  lane: 'identity',
  index: '03',
  navLabel: content.navLabel,
  title: content.title,
  mark: content.mark,
  kana: content.kana,
  signal: content.signal,
  description: content.description,
  lede: content.lede,
  homeBlurb: content.homeBlurb,
  tile: {
    size: 'mid',
    col: 8,
    row: 4,
    colSpan: 5,
    rowSpan: 2,
    code: 'MOD-03',
    subtitle: content.tile.subtitle,
    status: content.tile.status,
    watermark: '03',
    icon: 'fader',
  },
  blocks: [
    {
      kind: 'copy',
      heading: blocks.practice.heading,
      body: blocks.practice.body,
    },
    {
      kind: 'fields',
      heading: blocks.services.heading,
      items: blocks.services.items,
    },
    {
      kind: 'stack',
      heading: blocks.credits.heading,
      items: blocks.credits.items,
    },
    {
      kind: 'fields',
      heading: blocks.book.heading,
      items: blocks.book.items,
    },
    {
      kind: 'note',
      body: blocks.note.body,
    },
  ],
});

export { default as View } from '../../components/section/SectionView.astro';
