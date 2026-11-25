import { gap, text } from '../../core/copy';
import { identity } from '../../content/identity';

/**
 * About page words.
 * module.ts wires these into the section. Shared names stay in identity.ts.
 */
export const words = {
  navLabel: 'About',
  title: 'About',
  mark: 'ABOUT',
  kana: 'プロフィール',
  signal: 'SIG.BIO // YU.SYS',
  description: `About ${identity.personalName}, artist name ${identity.artistName}.`,
  lede: `${identity.personalName}. Artist name ${identity.artistName}.`,
  homeBlurb: identity.personalName,

  tile: {
    subtitle: identity.personalName,
    status: `Artist name ${identity.artistName}`,
  },

  name: {
    heading: 'Name',
    items: [
      { label: 'Display name', value: text(identity.personalName) },
      { label: 'Artist name', value: text(identity.artistName) },
      { label: 'Tagline', value: gap('one-line tagline') },
      { label: 'Based', value: text('Toronto') },
    ],
  },

  who: {
    heading: 'Who',
    body: text(identity.mainBio),
  },

  values: {
    heading: 'Values',
    body: gap('what drives you'),
  },

  funFacts: {
    heading: 'Fun facts',
    items: [
      {
        title: gap('fact'),
        rows: [{ label: 'Detail', value: gap('detail') }],
      },
    ],
  },

  signals: {
    heading: 'Signals',
  },
};
