/**
 * Yu's bio, copied word for word from the Yuzu EPK ("Yuzu Bio.docx").
 * The Producer (Yuzu) page shows `full`.
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

/** Yu's main bio. Shown on the Main Hub and the About page. */
export const mainBio =
  "Hi! I'm Yuzu, a software engineer, musician, and educator. I help people unlock their potential through better tools and teaching. As an AuDHD individual, I explore ways to work smarter and learn faster.";
