/** Plain data for one registered section. Kept serializable so pages can prerender it. */
export type Lane = 'identity' | 'utility';

export type TileSize = 'hero' | 'mid' | 'small';

export type TileIcon = 'apps' | 'wave' | 'fader' | 'keys' | 'mark' | 'id' | 'ping';

/**
 * Home-menu placement. The launcher is a 12×8 grid; each module owns its cell
 * so adding a section is still one file.
 */
export interface HomeTile {
  size: TileSize;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
  /** Small HUD code, e.g. MOD-01. */
  code: string;
  /** Line under the big title. */
  subtitle: string;
  /** Bottom status line. Factual, or a placeholder when statusPlaceholder is set. */
  status: string;
  statusPlaceholder?: boolean;
  /** Giant faint mark inside the glass. */
  watermark: string;
  icon: TileIcon;
}

export const HOME_GRID = { columns: 12, rows: 8 } as const;

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
  /** Floating menu tile on the home page. */
  tile: HomeTile;
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
