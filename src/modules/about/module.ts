import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';
import { identity } from '../../core/identity';

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
  description: `About ${identity.personalName}, artist name ${identity.artistName}.`,
  lede: `${identity.personalName}. Artist name ${identity.artistName}.`,
  homeBlurb: identity.personalName,
  tile: {
    size: 'small',
    col: 9,
    row: 6,
    colSpan: 2,
    rowSpan: 3,
    code: 'MOD-06',
    subtitle: identity.personalName,
    status: `Artist name ${identity.artistName}`,
    watermark: '06',
    icon: 'id',
  },
  source: 'content/bio.md',
  blocks: [
    {
      kind: 'fields',
      heading: 'Name',
      items: [
        { label: 'Display name', value: text(identity.personalName) },
        { label: 'Artist name', value: text(identity.artistName) },
        { label: 'Tagline', value: gap('one-line tagline') },
        { label: 'Based', value: text('Toronto') },
      ],
    },
    {
      kind: 'copy',
      heading: 'Who',
      body: text(identity.mainBio),
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
