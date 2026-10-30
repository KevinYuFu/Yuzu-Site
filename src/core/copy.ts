import type { TextValue } from './types';

/** Copy that is actually known. */
export const text = (value: string): TextValue => ({ text: value });

/** A gap. The renderer wraps it as `[placeholder: …]`. */
export const gap = (value: string): TextValue => ({ text: value, placeholder: true });
