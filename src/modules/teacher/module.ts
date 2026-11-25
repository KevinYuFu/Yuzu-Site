/**
 * Wiring for the Teacher page. The words are in ./content.
 */
import { defineSection } from '../../core/define';
import { content } from './content';

export const section = defineSection({
  id: 'teacher',
  slug: 'teacher',
  order: 4,
  lane: 'identity',
  index: '04',
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
    col: 1,
    row: 6,
    colSpan: 4,
    rowSpan: 3,
    code: 'MOD-04',
    subtitle: content.tile.subtitle,
    status: content.tile.status,
    watermark: '04',
    icon: 'keys',
  },
  blocks: [],
});

export { default as View } from './TeacherView.astro';
