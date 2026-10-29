import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';
import { bio } from './bio.data';

export const section = defineSection({
  id: 'about',
  slug: 'about',
  order: 6,
  lane: 'utility',
  index: '06',
  navLabel: 'About',
  title: 'About',
  mark: 'ABOUT',
  kana: 'プロフィール',
  signal: 'SIG.BIO // YU.SYS',
  description: 'About Yu Fu, artist name Yuzu.',
  lede: 'Yu Fu. Artist name Yuzu.',
  homeBlurb: 'Yu Fu',
  tile: {
    size: 'small',
    col: 9,
    row: 6,
    colSpan: 2,
    rowSpan: 3,
    code: 'MOD-06',
    subtitle: 'Yu Fu',
    status: 'Artist name Yuzu',
    watermark: '06',
    icon: 'id',
  },
  source: 'content/bio.md',
  blocks: [
    {
      kind: 'fields',
      heading: 'Name',
      items: [
        { label: 'Display name', value: text('Yu Fu') },
        { label: 'Artist name', value: text('Yuzu') },
        { label: 'Tagline', value: gap('one-line tagline') },
        { label: 'Based', value: text('Toronto') },
      ],
    },
    {
      kind: 'copy',
      heading: 'Who',
      body: text(bio.full),
    },
    {
      kind: 'copy',
      heading: 'Values',
      body: gap('what drives you'),
    },
    {
      kind: 'stack',
      heading: 'Fun facts',
      items: [
        {
          title: gap('fact'),
          rows: [{ label: 'Detail', value: gap('detail') }],
        },
      ],
    },
    {
      kind: 'registry',
      heading: 'Signals',
      lanes: ['identity'],
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
