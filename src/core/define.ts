import type { SectionInput, SectionModule, TileIcon, TileSize } from './types';
import { HOME_GRID } from './types';

const tileSizes = new Set<TileSize>(['hero', 'mid', 'small']);
const tileIcons = new Set<TileIcon>(['apps', 'wave', 'fader', 'keys', 'mark', 'id', 'ping']);

const required = [
  'id',
  'slug',
  'order',
  'lane',
  'index',
  'navLabel',
  'title',
  'mark',
  'kana',
  'signal',
  'description',
  'lede',
  'homeBlurb',
  'source',
  'blocks',
  'tile',
] as const;

/**
 * Normalize a section plugin. Modules call this and export the result
 * as `section`. The composition root is the only thing that loads them.
 */
export function defineSection(input: SectionInput): SectionModule {
  const section: SectionModule = {
    ...input,
    route: `/${input.slug}`,
  };

  const missing = required.filter((key) => {
    const value = section[key];
    return value === undefined || value === '';
  });
  if (missing.length) {
    throw new Error(`Section "${input.id || '?'}" is missing ${missing.join(', ')}`);
  }
  if (!/^[a-z0-9-]+$/.test(section.slug)) {
    throw new Error(`Section "${section.id}" has an invalid slug "${section.slug}"`);
  }
  if (!/^\d{2}$/.test(section.index)) {
    throw new Error(`Section "${section.id}" index must be two digits`);
  }
  if (section.lane !== 'identity' && section.lane !== 'utility') {
    throw new Error(`Section "${section.id}" has an unknown lane`);
  }
  const tile = section.tile;
  if (!tile || typeof tile !== 'object') {
    throw new Error(`Section "${section.id}" is missing a home tile`);
  }
  if (!tileSizes.has(tile.size)) {
    throw new Error(`Section "${section.id}" has an unknown tile size`);
  }
  if (!tileIcons.has(tile.icon)) {
    throw new Error(`Section "${section.id}" has an unknown tile icon`);
  }
  for (const key of ['col', 'row', 'colSpan', 'rowSpan'] as const) {
    const value = tile[key];
    if (!Number.isInteger(value) || value < 1) {
      throw new Error(`Section "${section.id}" tile.${key} must be a positive integer`);
    }
  }
  if (tile.col + tile.colSpan - 1 > HOME_GRID.columns || tile.row + tile.rowSpan - 1 > HOME_GRID.rows) {
    throw new Error(`Section "${section.id}" tile sits outside the ${HOME_GRID.columns}×${HOME_GRID.rows} home grid`);
  }
  if (!tile.code || !tile.subtitle || !tile.status || !tile.watermark) {
    throw new Error(`Section "${section.id}" tile is missing code, subtitle, status, or watermark`);
  }
  return section;
}
