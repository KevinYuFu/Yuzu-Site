import { hubProfile } from '../components/hub/profile.data';
import { section as about } from '../modules/about/module';
import { section as contact } from '../modules/contact/module';
import { section as mixing } from '../modules/mixing/module';
import { section as producer } from '../modules/producer/module';
import { section as rivals } from '../modules/rivals/module';
import { section as software } from '../modules/software/module';
import { resume } from '../modules/software/resume.data';
import { section as teacher } from '../modules/teacher/module';
import type { Block, SectionModule } from './types';
import { identity } from './identity';

/**
 * Feature models must be filled from `identity`, not a second copy of a name.
 * The build runs this from the composition root.
 */
export function assertIdentityModels(): void {
  const problems: string[] = [];
  const same = (label: string, actual: string, expected: string) => {
    if (actual !== expected) problems.push(`${label} is ${JSON.stringify(actual)}`);
  };

  same('hub name', hubProfile.name, identity.personalName);
  same('hub chinese name', hubProfile.chineseName.text, identity.chineseName.text);
  same('hub chinese lang', hubProfile.chineseName.lang, identity.chineseName.lang);
  same('hub bio', hubProfile.excerpt, identity.mainBio);
  same('hub alt', hubProfile.photo.alt, `${identity.personalName} sitting on a tall stool, in a black and white hoodie and cargo pants.`);

  same('artist label', producer.navLabel, identity.artistName);
  same('artist title', producer.title, identity.artistName);
  same('artist mark', producer.mark, identity.artistMark);
  same('artist kana', producer.kana, identity.chineseName.text);
  same('artist kana lang', producer.kanaLang, identity.chineseName.lang);
  same('artist signal', producer.signal, `SIG.AUD // ${identity.artistMark}.SYS`);
  same('artist bio', copyBody(producer, 'About'), identity.artistBio);

  same('about personal name', fieldValue(about, 'Name', 'Display name'), identity.personalName);
  same('about artist name', fieldValue(about, 'Name', 'Artist name'), identity.artistName);
  same('about blurb', about.homeBlurb, identity.personalName);
  same('about who', copyBody(about, 'Who'), identity.mainBio);

  const [accent, ...rest] = identity.personalName.split(' ');
  same('resume accent', resume.name.accent, accent);
  same('resume rest', resume.name.rest, rest.join(' '));

  for (const section of [about, contact, mixing, rivals, software, teacher]) {
    same(`${section.id} kana lang`, section.kanaLang, 'ja');
  }

  if (problems.length) {
    throw new Error(`Shared identity is not what the feature models use:\n${problems.join('\n')}`);
  }
}

function copyBody(section: SectionModule, heading: string): string {
  const block = section.blocks.find((item): item is Extract<Block, { kind: 'copy' }> => item.kind === 'copy' && item.heading === heading);
  if (!block) return '';
  return block.body.text;
}

function fieldValue(section: SectionModule, heading: string, label: string): string {
  const block = section.blocks.find((item): item is Extract<Block, { kind: 'fields' }> => item.kind === 'fields' && item.heading === heading);
  return block?.items.find((item) => item.label === label)?.value.text ?? '';
}
