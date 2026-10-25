import { gap, text } from '../../core/copy';
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
  blocks: [
    {
      kind: 'stack',
      heading: 'Offerings',
      items: [
        {
          title: text('JSTDRMN Academy DJ Bootcamp'),
          rows: [
            { label: 'What it is', value: text('DJ Bootcamp') },
            { label: 'Levels', value: gap('levels') },
            { label: 'Ages', value: gap('ages') },
            { label: 'Format', value: gap('in person, online, or both') },
          ],
        },
        {
          title: text('Piano lessons'),
          rows: [
            { label: 'What it is', value: text('Piano lessons') },
            { label: 'Levels', value: gap('levels') },
            { label: 'Ages', value: gap('ages') },
            { label: 'Styles', value: gap('styles or genres') },
          ],
        },
      ],
    },
    {
      kind: 'copy',
      heading: 'Approach',
      body: gap('teaching approach, 2–3 sentences'),
    },
    {
      kind: 'fields',
      heading: 'Logistics',
      items: [
        { label: 'Format', value: gap('in person, online, or both') },
        { label: 'Length and frequency', value: gap('lesson length and frequency') },
        { label: 'Location', value: gap('location, if in person') },
        { label: 'Pricing', value: gap('rates, packages, or "inquire"') },
      ],
    },
    {
      kind: 'fields',
      heading: 'Start',
      items: [
        { label: 'How to start', value: gap('trial, email, or booking link') },
        { label: 'Credentials', value: gap('training or experience') },
      ],
    },
    {
      kind: 'stack',
      heading: 'Testimonials',
      items: [
        {
          title: gap('student name'),
          rows: [{ label: 'Quote', value: gap('quote') }],
        },
      ],
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
