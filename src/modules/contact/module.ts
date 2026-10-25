import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';

export const section = defineSection({
  id: 'contact',
  slug: 'contact',
  order: 7,
  lane: 'utility',
  index: '07',
  navLabel: 'Contact',
  title: 'Contact',
  mark: 'CONTACT',
  kana: 'コンタクト',
  signal: 'SIG.IO // CONTACT.SYS',
  description: 'Contact Yu Fu (Yuzu). Public details are not filled in yet.',
  lede: 'Public contact details are not filled in yet.',
  homeBlurb: 'Reach Yu Fu',
  tile: {
    size: 'small',
    col: 11,
    row: 6,
    colSpan: 2,
    rowSpan: 3,
    code: 'MOD-07',
    subtitle: 'Reach Yu Fu',
    status: 'public contact',
    statusPlaceholder: true,
    watermark: '07',
    icon: 'ping',
  },
  source: 'content/contact.md',
  blocks: [
    {
      kind: 'fields',
      heading: 'Primary',
      items: [
        { label: 'Email', value: gap('public email') },
        { label: 'Preferred method', value: gap('email, DM, or form') },
      ],
    },
    {
      kind: 'fields',
      heading: 'Socials',
      items: [
        { label: 'Instagram', value: gap('Instagram URL') },
        { label: 'LinkedIn', value: gap('LinkedIn URL') },
        { label: 'GitHub', value: gap('GitHub URL') },
        { label: 'SoundCloud', value: gap('SoundCloud or music URL') },
        { label: 'Other', value: gap('other') },
      ],
    },
    {
      kind: 'note',
      body: text('No contact form is wired up. content/contact.md still has that choice open, and this page does not submit anywhere.'),
    },
    {
      kind: 'fields',
      heading: 'Call to action',
      items: [{ label: 'Wording', value: gap('call-to-action wording') }],
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
