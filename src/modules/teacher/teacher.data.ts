import type { TileIcon } from '../../core/types';

/** Teacher landing data. Placeholders render as `[placeholder: …]`. */
export interface TeachTile {
  id: string;
  code: string;
  title: string;
  kana: string;
  /** Known fact for the tile, if any. */
  fact?: string;
  /** One-line description still to be written. */
  blurb: string;
  icon: TileIcon;
}

export const teacher = {
  approach: 'teaching approach, 2–3 sentences',
  tiles: [
    { id: 'music-production', code: 'EDU-01', title: 'Music Production', kana: 'おんがくせいさく', blurb: 'music production lessons, one line', icon: 'wave' },
    { id: 'djing', code: 'EDU-02', title: 'DJing', kana: 'ディージェイ', fact: 'JSTDRMN Academy DJ Bootcamp', blurb: 'DJ Bootcamp details, one line', icon: 'fader' },
    { id: 'piano', code: 'EDU-03', title: 'Piano', kana: 'ピアノ', fact: 'Piano lessons', blurb: 'levels, ages or styles, one line', icon: 'keys' },
    { id: 'driving', code: 'EDU-04', title: 'Driving Instructor', kana: 'うんてん', blurb: 'driving lessons, one line', icon: 'ping' },
    { id: 'coding', code: 'EDU-05', title: 'General / Coding Instructor', kana: 'コーディング', blurb: 'coding or general tutoring, one line', icon: 'apps' },
  ] satisfies TeachTile[],
};
