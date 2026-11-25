/**
 * Wiring for the artist page. The words are in ./content.
 */
import { defineSection } from '../../core/define';
import { identity } from '../../content/identity';
import { content } from './content';

const { blocks } = content;

export const section = defineSection({
  id: 'yuzu',
  slug: 'yuzu',
  order: 2,
  lane: 'identity',
  index: '02',
  navLabel: content.navLabel,
  title: content.title,
  mark: content.mark,
  kana: content.kana,
  kanaLang: identity.chineseName.lang,
  signal: content.signal,
  description: content.description,
  lede: content.lede,
  homeBlurb: content.homeBlurb,
  tile: {
    size: 'mid',
    col: 8,
    row: 1,
    colSpan: 5,
    rowSpan: 3,
    code: 'MOD-02',
    subtitle: content.tile.subtitle,
    status: content.tile.status,
    watermark: '02',
    icon: 'wave',
  },
  blocks: [
    {
      kind: 'copy',
      heading: blocks.about.heading,
      body: blocks.about.body,
    },
    {
      kind: 'copy',
      heading: blocks.sound.heading,
      body: blocks.sound.body,
    },
    {
      kind: 'fields',
      heading: blocks.listen.heading,
      items: blocks.listen.items,
    },
    {
      kind: 'stack',
      heading: blocks.releases.heading,
      items: blocks.releases.items,
    },
    {
      kind: 'fields',
      heading: blocks.bookings.heading,
      items: blocks.bookings.items,
    },
    {
      kind: 'note',
      body: blocks.note.body,
    },
  ],
});

export { default as View } from '../../components/section/SectionView.astro';
