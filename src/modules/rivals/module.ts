import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';

export const section = defineSection({
  id: 'rivals',
  slug: 'rivals',
  order: 5,
  lane: 'identity',
  index: '05',
  navLabel: 'Rivals',
  title: 'Rivals',
  mark: 'RIVALS',
  kana: 'ライバルズ',
  signal: 'SIG.EVT // RIVALS.SYS',
  description: 'Rivals, an event run by Yu Fu.',
  lede: 'An event run by Yu Fu. What it is, when it happens, and how to join are not filled in yet.',
  homeBlurb: 'Event',
  tile: {
    size: 'mid',
    col: 5,
    row: 6,
    colSpan: 4,
    rowSpan: 3,
    code: 'MOD-05',
    subtitle: 'Event',
    status: 'Run by Yu Fu',
    watermark: '05',
    icon: 'mark',
  },
  source: 'content/rivals.md',
  blocks: [
    {
      kind: 'copy',
      heading: 'What it is',
      body: gap('elevator pitch, 2–3 sentences'),
    },
    {
      kind: 'copy',
      heading: 'Why it exists',
      body: gap('the story'),
    },
    {
      kind: 'copy',
      heading: 'Format',
      body: gap('what happens at the event'),
    },
    {
      kind: 'fields',
      heading: 'When and where',
      items: [
        { label: 'Frequency', value: gap('one-off or recurring') },
        { label: 'Next date', value: gap('next date') },
        { label: 'Location', value: gap('venue') },
      ],
    },
    {
      kind: 'fields',
      heading: 'Get involved',
      items: [
        { label: 'Attend', value: gap('how to attend') },
        { label: 'Compete', value: gap('how to participate') },
        { label: 'Sponsor', value: gap('sponsor or partner') },
        { label: 'Tickets', value: gap('tickets or signup link') },
      ],
    },
    {
      kind: 'fields',
      heading: 'Links',
      items: [
        { label: 'Instagram', value: gap('Instagram URL') },
        { label: 'Other', value: gap('other link') },
      ],
    },
    {
      kind: 'note',
      body: text('No lineup, venue, date, or ticket price is shown until it is supplied.'),
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
