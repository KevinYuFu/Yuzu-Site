/**
 * Words for the Mixing page.
 * The byline uses the personal name from src/content/identity.ts.
 */
import { gap, text } from '../../core/copy';
import { identity } from '../../content/identity';

export const content = {
  navLabel: 'Mixing',
  title: 'Mixing & Mastering',
  mark: 'MASTER',
  kana: 'マスタリング',
  signal: 'SIG.MIX // MASTER.SYS',
  description: `Mixing and mastering by ${identity.personalName}.`,
  lede: 'Mixing and mastering. Services, credits, and rates are not filled in yet.',
  homeBlurb: 'Mixing & mastering',

  tile: {
    subtitle: 'Mastering',
    status: 'Mixing & mastering',
  },

  blocks: {
    practice: {
      heading: 'Practice',
      body: gap('what the mixing and mastering work covers'),
    },
    services: {
      heading: 'Services',
      items: [
        { label: 'Offered', value: gap('services') },
        { label: 'Turnaround', value: gap('turnaround') },
        { label: 'Rates', value: gap('rates or "inquire"') },
      ],
    },
    credits: {
      heading: 'Credits',
      items: [
        {
          title: gap('credit or project'),
          rows: [
            { label: 'Client', value: gap('client') },
            { label: 'Role', value: gap('mix, master, or both') },
            { label: 'Link', value: gap('link') },
          ],
        },
      ],
    },
    book: {
      heading: 'Book',
      items: [
        { label: 'How to start', value: gap('how to start a project') },
        { label: 'Email', value: gap('public email') },
      ],
    },
    note: {
      body: text('No clients, credits, or prices are invented on this page.'),
    },
  },
};
