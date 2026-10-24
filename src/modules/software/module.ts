import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';

export const section = defineSection({
  id: 'software',
  slug: 'software',
  order: 1,
  lane: 'identity',
  index: '01',
  navLabel: 'Software',
  title: 'Software Engineer',
  mark: 'SOFTWARE',
  kana: 'ソフトウェア',
  signal: 'SIG.APP // FRUIT.SYS',
  description: 'Software by Yu Fu. Fruit-named apps, including Tangerine, a tab manager.',
  lede: 'Fruit-named apps. Tangerine is a tab manager. Everything else on this page is still open.',
  homeBlurb: 'Fruit-named apps · Tangerine',
  source: 'content/software-engineering.md',
  blocks: [
    {
      kind: 'copy',
      heading: 'On record',
      body: text('Apps are named after fruits. Tangerine is a tab manager.'),
    },
    {
      kind: 'stack',
      heading: 'Selected work',
      items: [
        {
          title: text('Tangerine'),
          rows: [
            { label: 'What it is', value: text('Tab manager') },
            { label: 'Role', value: gap('your role') },
            { label: 'Tech', value: gap('tech used') },
            { label: 'Link', value: gap('live / GitHub') },
            { label: 'Why it is here', value: gap('why it is worth showing') },
          ],
        },
        {
          title: gap('project name'),
          rows: [
            { label: 'What it is', value: gap('what it is') },
            { label: 'Role', value: gap('your role') },
            { label: 'Tech', value: gap('tech used') },
            { label: 'Link', value: gap('live / GitHub') },
          ],
        },
      ],
    },
    {
      kind: 'fields',
      heading: 'Skills',
      items: [
        { label: 'Languages', value: gap('languages') },
        { label: 'Frameworks', value: gap('frameworks') },
        { label: 'Tools / infra', value: gap('tools and infra') },
      ],
    },
    {
      kind: 'fields',
      heading: 'Experience',
      items: [
        { label: 'Roles', value: gap('roles, companies, dates') },
        { label: 'Resume', value: gap('PDF or "on request"') },
      ],
    },
    {
      kind: 'fields',
      heading: 'Availability',
      items: [{ label: 'Status', value: gap('open to roles, contract, or not looking') }],
    },
    {
      kind: 'fields',
      heading: 'Links',
      items: [
        { label: 'GitHub', value: gap('GitHub URL') },
        { label: 'LinkedIn', value: gap('LinkedIn URL') },
        { label: 'Resume', value: gap('resume PDF') },
      ],
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
