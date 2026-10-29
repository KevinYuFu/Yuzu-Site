import { defineSection } from '../../core/define';

export const section = defineSection({
  id: 'teacher',
  slug: 'teacher',
  order: 4,
  lane: 'identity',
  index: '04',
  navLabel: 'Teacher',
  title: 'Teacher',
  mark: 'TEACHER',
  kana: 'ティーチャー',
  signal: 'SIG.EDU // ACADEMY.SYS',
  description: 'Teaching: JSTDRMN Academy DJ Bootcamp and piano lessons.',
  lede: 'JSTDRMN Academy DJ Bootcamp. Piano lessons.',
  homeBlurb: 'DJ Bootcamp · piano',
  tile: {
    size: 'mid',
    col: 1,
    row: 6,
    colSpan: 4,
    rowSpan: 3,
    code: 'MOD-04',
    subtitle: 'DJ Bootcamp · piano',
    status: 'JSTDRMN Academy',
    watermark: '04',
    icon: 'keys',
  },
  source: 'content/music-teaching.md',
  // The landing page lives in TeacherView + teacher.data.ts.
  blocks: [],
});

export { default as View } from './TeacherView.astro';
