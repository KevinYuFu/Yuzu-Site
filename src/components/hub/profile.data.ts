import { bio } from '../../modules/about/bio.data';

/** Main Hub profile: Yu's portrait and bio teaser. */
export interface HubProfile {
  photo: {
    /** Smallest first. Width in px. */
    sources: { src: string; width: number }[];
    width: number;
    height: number;
    alt: string;
  };
  name: string;
  kana: string;
  excerpt: string;
  /** Where the full bio lives. */
  bioHref: string;
}

export const hubProfile: HubProfile = {
  photo: {
    sources: [
      { src: '/images/yu-sitting-900.webp', width: 400 },
      { src: '/images/yu-sitting-1600.webp', width: 711 },
    ],
    width: 711,
    height: 1600,
    alt: 'Yu Fu sitting on a tall stool, in a black and white hoodie and cargo pants.',
  },
  name: 'Yu Fu',
  kana: 'ユズ',
  excerpt: bio.excerpt,
  bioHref: '/about',
};
