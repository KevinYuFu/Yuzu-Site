import { gap, text } from '../../core/copy';
import { identity } from '../../content/identity';

/**
 * Contact page words.
 * module.ts wires these into the section. Shared names stay in identity.ts.
 */
export const words = {
  navLabel: 'Contact',
  title: 'Contact',
  mark: 'CONTACT',
  kana: 'コンタクト',
  signal: 'SIG.IO // CONTACT.SYS',
  description: `Contact ${identity.personalName} (${identity.artistName}). Public details are not filled in yet.`,
  lede: 'Public contact details are not filled in yet.',
  homeBlurb: `Reach ${identity.personalName}`,

  tile: {
    subtitle: `Reach ${identity.personalName}`,
    status: 'public contact',
  },

  primary: {
    heading: 'Primary',
    items: [
      { label: 'Email', value: gap('public email') },
      { label: 'Preferred method', value: gap('email, DM, or form') },
    ],
  },

  socials: {
    heading: 'Socials',
    items: [
      { label: 'Instagram', value: gap('Instagram URL') },
      { label: 'LinkedIn', value: gap('LinkedIn URL') },
      { label: 'GitHub', value: gap('GitHub URL') },
      { label: 'SoundCloud', value: gap('SoundCloud or music URL') },
      { label: 'Other', value: gap('other') },
    ],
  },

  noForm: {
    body: text(
      'No contact form is wired up. docs/content/contact.md still has that choice open, and this page does not submit anywhere.',
    ),
  },

  callToAction: {
    heading: 'Call to action',
    items: [{ label: 'Wording', value: gap('call-to-action wording') }],
  },
};
