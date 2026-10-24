/** Plain data for one registered section. Kept serializable so pages can prerender it. */
export type Lane = 'identity' | 'utility';

export interface TextValue {
  text: string;
  /** Rendered as `[placeholder: text]` until real copy exists. */
  placeholder?: boolean;
}

export interface FieldRow {
  label: string;
  value: TextValue;
}

export interface StackItem {
  title: TextValue;
  rows: FieldRow[];
}

export type Block =
  | { kind: 'copy'; heading: string; body: TextValue }
  | { kind: 'fields'; heading: string; items: FieldRow[] }
  | { kind: 'stack'; heading: string; items: StackItem[] }
  | { kind: 'note'; body: TextValue }
  | { kind: 'registry'; heading: string; lanes: Lane[] };

export interface SectionModule {
  id: string;
  /** URL segment. `route` is always `/${slug}`. */
  slug: string;
  route: string;
  order: number;
  lane: Lane;
  /** Two-digit HUD index, e.g. "01". */
  index: string;
  navLabel: string;
  /** Accessible name and document title. */
  title: string;
  /** Short glitch word on the section hero. */
  mark: string;
  /** Japanese accent, from the site's kana subset. */
  kana: string;
  /** Decorative signal id in the neo-Tokyo HUD. */
  signal: string;
  description: string;
  lede: string;
  /** One line in the home channel list. */
  homeBlurb: string;
  /** Where the real copy should be written. */
  source: string;
  blocks: Block[];
}

export type SectionInput = Omit<SectionModule, 'route'>;

export interface SectionViewProps {
  section: SectionModule;
  sections: SectionModule[];
  prev?: SectionModule;
  next?: SectionModule;
}

/** Astro view registered by a section module. */
export type SectionViewComponent = (props: SectionViewProps) => unknown;
