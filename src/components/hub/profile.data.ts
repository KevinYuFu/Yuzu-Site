import { identity } from '../../core/identity';

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
  chineseName: typeof identity.chineseName;
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
    alt: `${identity.personalName} sitting on a tall stool, in a black and white hoodie and cargo pants.`,
  },
  name: identity.personalName,
  chineseName: identity.chineseName,
  excerpt: identity.mainBio,
  bioHref: '/about',
};
