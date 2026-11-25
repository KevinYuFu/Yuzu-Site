/**
 * Words for the artist page.
 * Names and the artist bio come from src/content/identity.ts.
 */
import { gap, text } from '../../core/copy';
import { identity } from '../../content/identity';

export const content = {
  navLabel: identity.artistName,
  title: identity.artistName,
  mark: identity.artistMark,
  kana: identity.chineseName.text,
  signal: `SIG.AUD // ${identity.artistMark}.SYS`,
  description: `${identity.artistName} — hyperbass, hyperpop vocals, bass music, and J-pop chords.`,
  lede: 'Artist',
  homeBlurb: 'Hyperbass · hyperpop · J-pop chords',

  tile: {
    subtitle: 'Artist',
    status: 'Bass music · J-pop chords',
  },

  blocks: {
    about: {
      heading: 'About',
      body: text(identity.artistBio),
    },
    sound: {
      heading: 'Sound',
      body: text('Hyperbass, hyperpop vocals, bass music, J-pop chords.'),
    },
    listen: {
      heading: 'Listen',
      items: [
        { label: 'SoundCloud', value: gap('SoundCloud URL') },
        { label: 'Mixcloud', value: gap('Mixcloud URL') },
        { label: 'Spotify', value: gap('Spotify URL') },
        { label: 'YouTube', value: gap('YouTube URL') },
        { label: 'Instagram', value: gap('Instagram URL') },
      ],
    },
    releases: {
      heading: 'Releases',
      items: [
        {
          title: gap('release title'),
          rows: [
            { label: 'What it is', value: gap('release, mix, or set') },
            { label: 'Link', value: gap('link') },
          ],
        },
      ],
    },
    bookings: {
      heading: 'Bookings',
      items: [
        { label: 'Available for', value: gap('what to book') },
        { label: 'How to book', value: gap('how to book') },
        { label: 'Past venues', value: gap('venues or events') },
      ],
    },
    note: {
      body: text('No release titles, credits, or venues are shown until they are supplied.'),
    },
  },
};
