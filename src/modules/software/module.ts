/**
 * Wiring for the Software page. The words are in ./content.
 */
import { defineSection } from '../../core/define';
import { content } from './content';

const { blocks } = content;

export const section = defineSection({
  id: 'software',
  slug: 'software',
  order: 1,
  lane: 'identity',
  index: '01',
  navLabel: content.navLabel,
  title: content.title,
  mark: content.mark,
  kana: content.kana,
  signal: content.signal,
  description: content.description,
  lede: content.lede,
  homeBlurb: content.homeBlurb,
  tile: {
    size: 'hero',
    col: 1,
    row: 1,
    colSpan: 7,
    rowSpan: 5,
    code: 'MOD-01',
    subtitle: content.tile.subtitle,
    status: content.tile.status,
    watermark: '01',
    icon: 'apps',
  },
  blocks: [
    {
      kind: 'copy',
      heading: blocks.onRecord.heading,
      body: blocks.onRecord.body,
    },
    {
      kind: 'stack',
      heading: blocks.selectedWork.heading,
      items: blocks.selectedWork.items,
    },
    {
      kind: 'fields',
      heading: blocks.skills.heading,
      items: blocks.skills.items,
    },
    {
      kind: 'fields',
      heading: blocks.experience.heading,
      items: blocks.experience.items,
    },
    {
      kind: 'fields',
      heading: blocks.availability.heading,
      items: blocks.availability.items,
    },
    {
      kind: 'fields',
      heading: blocks.links.heading,
      items: blocks.links.items,
    },
  ],
});

export { default as View } from './ResumeView.astro';
