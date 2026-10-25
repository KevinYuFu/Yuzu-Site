import { gap, text } from '../../core/copy';
import { defineSection } from '../../core/define';

export const section = defineSection({
  id: 'producer',
  slug: 'producer',
  order: 2,
  lane: 'identity',
  index: '02',
  navLabel: 'Producer',
  title: 'Music Producer',
  mark: 'PRODUCER',
  kana: 'プロデューサー',
  signal: 'SIG.AUD // YUZU.SYS',
  description: 'Yuzu — hyperbass, hyperpop vocals, bass music, and J-pop chords.',
  lede: 'Yuzu. Hyperbass, hyperpop vocals, bass music, J-pop chords.',
  homeBlurb: 'Hyperbass · hyperpop · J-pop chords',
  tile: {
    size: 'mid',
    col: 8,
    row: 1,
    colSpan: 5,
    rowSpan: 3,
    code: 'MOD-02',
    subtitle: 'Hyperbass · hyperpop vocals',
    status: 'Bass music · J-pop chords',
    watermark: '02',
    icon: 'wave',
  },
  source: 'content/dj-artist.md',
  blocks: [
    {
      kind: 'copy',
      heading: 'Sound',
      body: text('Hyperbass, hyperpop vocals, bass music, J-pop chords.'),
    },
    {
      kind: 'fields',
      heading: 'Listen',
      items: [
        { label: 'SoundCloud', value: gap('SoundCloud URL') },
        { label: 'Mixcloud', value: gap('Mixcloud URL') },
        { label: 'Spotify', value: gap('Spotify URL') },
        { label: 'YouTube', value: gap('YouTube URL') },
        { label: 'Instagram', value: gap('Instagram URL') },
      ],
    },
    {
      kind: 'stack',
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
    {
      kind: 'fields',
      heading: 'Bookings',
      items: [
        { label: 'Available for', value: gap('what to book') },
        { label: 'How to book', value: gap('how to book') },
        { label: 'Past venues', value: gap('venues or events') },
      ],
    },
    {
      kind: 'note',
      body: text('No release titles, credits, or venues are shown until they are supplied.'),
    },
  ],
});

export { default as View } from '../../components/SectionView.astro';
