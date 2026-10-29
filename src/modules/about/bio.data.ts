/**
 * Yu's bio, copied word for word from the Yuzu EPK ("Yuzu Bio.docx").
 * The Main Hub shows `excerpt`; the About page shows `full`.
 */
const sentences = [
  'Yuzu (Toronto) makes high-energy game-inspired electronic music, and blends the genres of heavy bass music.',
  'He has discovered that music provides the stimulus that unlocks his focus and energy (especially for those with ADHD).',
  'Yuzu aims to create that same activating energy for others, helping them switch on, take action, and level up in the game of real life.',
  'Alongside his artist work, he is also an educator working with JSTDRMN, contributing to the next generation of producers.',
];

export const bio = {
  excerpt: sentences.slice(0, 2).join(' '),
  full: sentences.join(' '),
};
