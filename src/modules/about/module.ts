import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';

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
  source: 'content/bio.md',
  blocks: [
    {
      kind: 'fields',
      heading: 'Name',
      items: [
        { label: 'Display name', value: text('Yu Fu') },
        { label: 'Artist name', value: text('Yuzu') },
        { label: 'Tagline', value: gap('one-line tagline') },
        { label: 'Based', value: gap('city or region') },
      ],
    },
    {
      kind: 'copy',
      heading: 'Who',
      body: gap('2–4 short paragraphs'),
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
