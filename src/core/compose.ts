import DefaultView from '../components/SectionView.astro';
import type { SectionModule, SectionViewComponent } from './types';
import { HOME_GRID } from './types';

/**
 * Composition root.
 *
 * Each section is a plugin at src/modules/<id>/module.ts. The plugin exports
 * `section` (metadata, route, content blocks) and `View` (its page component).
 * This file is the only place that loads plugins. Adding a section means
 * adding one module — pages and the home launcher read the registry.
 */
interface ModuleFile {
  section: SectionModule;
  View?: SectionViewComponent;
}

const files = import.meta.glob<ModuleFile>('../modules/*/module.ts', {
  eager: true,
});

export interface Site {
  sections: SectionModule[];
  identities: SectionModule[];
  utilities: SectionModule[];
  viewFor(slug: string): SectionViewComponent;
}

let site: Site | undefined;

export function composeSite(): Site {
  if (site) return site;

  const entries = Object.entries(files).map(([path, mod]) => {
    if (!mod.section) {
      throw new Error(`${path} must export \`section\` from defineSection()`);
    }
    return {
      path,
      section: mod.section,
      View: mod.View ?? (DefaultView as unknown as SectionViewComponent),
    };
  });

  entries.sort((a, b) => a.section.order - b.section.order || a.section.slug.localeCompare(b.section.slug));

  const slugs = new Set<string>();
  const ids = new Set<string>();
  for (const entry of entries) {
    const { id, slug } = entry.section;
    if (slugs.has(slug)) throw new Error(`Duplicate section slug "${slug}"`);
    if (ids.has(id)) throw new Error(`Duplicate section id "${id}"`);
    slugs.add(slug);
    ids.add(id);
  }

  const sections = entries.map((entry) => entry.section);
  assertHomeTiles(sections);
  const views = new Map(entries.map((entry) => [entry.section.slug, entry.View]));

  site = {
    sections,
    identities: sections.filter((section) => section.lane === 'identity'),
    utilities: sections.filter((section) => section.lane === 'utility'),
    viewFor(slug: string) {
      const view = views.get(slug);
      if (!view) throw new Error(`No view registered for /${slug}`);
      return view;
    },
  };

  return site;
}

/** Home tiles share one 12×8 grid. Overlaps fail the build instead of stacking by accident. */
function assertHomeTiles(sections: SectionModule[]) {
  const occupied = new Map<string, string>();
  for (const section of sections) {
    const { col, row, colSpan, rowSpan } = section.tile;
    for (let y = row; y < row + rowSpan; y++) {
      for (let x = col; x < col + colSpan; x++) {
        if (x < 1 || y < 1 || x > HOME_GRID.columns || y > HOME_GRID.rows) {
          throw new Error(`${section.id} tile cell ${x},${y} is outside the home grid`);
        }
        const key = `${x},${y}`;
        const prior = occupied.get(key);
        if (prior) throw new Error(`Home tiles overlap at ${key}: ${prior} and ${section.id}`);
        occupied.set(key, section.id);
      }
    }
  }
}
