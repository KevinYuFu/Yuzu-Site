import type { SectionInput, SectionModule } from './types';

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
  return section;
}
