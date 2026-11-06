import { bio, mainBio } from '../modules/about/bio.data';

/**
 * The only place personal, artist, and Chinese names are written.
 * Section modules and chrome read this object. Bios stay worded in
 * `bio.data.ts`; this file only points at those shared strings.
 */
const artistName = 'Yuzu';

export const identity = {
  personalName: 'Yu Fu',
  artistName,
  /** Latin wordmark. Same name as `artistName`, HUD spelling. */
  artistMark: artistName.toUpperCase(),
  chineseName: {
    text: '傅宇',
    lang: 'zh-Hant',
  } as const,
  /** Main Hub and About. */
  mainBio,
  /** Existing EPK bio on the artist page. */
  artistBio: bio.full,
};

/** Home joins the artist name and the personal name. Any other page is that page title, then the artist name. */
export function pageTitle(page?: string): string {
  return page
    ? `${page} — ${identity.artistName}`
    : `${identity.artistName} — ${identity.personalName}`;
}

export const homeDescription =
  `${identity.personalName} (${identity.artistName}): software, music production, mixing and mastering, teaching, and the Rivals event.`;
