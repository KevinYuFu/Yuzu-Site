import { gap, text } from '../../core/copy';
import { identity } from '../../content/identity';

/**
 * Rivals page words.
 * module.ts wires these into the section. Shared names stay in identity.ts.
 */
export const words = {
  navLabel: 'Rivals',
  title: 'Rivals',
  mark: 'RIVALS',
  kana: 'ライバルズ',
  signal: 'SIG.EVT // RIVALS.SYS',
  description: `Rivals, an event run by ${identity.personalName}.`,
  lede: `An event run by ${identity.personalName}. What it is, when it happens, and how to join are not filled in yet.`,
  homeBlurb: 'Event',

  tile: {
    subtitle: 'Event',
    status: `Run by ${identity.personalName}`,
  },

  whatItIs: {
    heading: 'What it is',
    body: gap('elevator pitch, 2–3 sentences'),
  },

  whyItExists: {
    heading: 'Why it exists',
    body: gap('the story'),
  },

  format: {
    heading: 'Format',
    body: gap('what happens at the event'),
  },

  whenAndWhere: {
    heading: 'When and where',
    items: [
      { label: 'Frequency', value: gap('one-off or recurring') },
      { label: 'Next date', value: gap('next date') },
      { label: 'Location', value: gap('venue') },
    ],
  },

  getInvolved: {
    heading: 'Get involved',
    items: [
      { label: 'Attend', value: gap('how to attend') },
      { label: 'Compete', value: gap('how to participate') },
      { label: 'Sponsor', value: gap('sponsor or partner') },
      { label: 'Tickets', value: gap('tickets or signup link') },
    ],
  },

  links: {
    heading: 'Links',
    items: [
      { label: 'Instagram', value: gap('Instagram URL') },
      { label: 'Other', value: gap('other link') },
    ],
  },

  untilSupplied: {
    body: text('No lineup, venue, date, or ticket price is shown until it is supplied.'),
  },
};
