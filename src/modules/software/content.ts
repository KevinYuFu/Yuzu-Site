/**
 * Words for the Software page.
 * The personal name comes from src/content/identity.ts.
 *
 * `content` fills defineSection (titles, tile lines, block text).
 * `resume` is the resume the page prints.
 */
import { gap, text } from '../../core/copy';
import { identity } from '../../content/identity';

const [nameAccent, ...nameRest] = identity.personalName.split(' ');

export const content = {
  navLabel: 'Software',
  title: 'Software Engineer',
  mark: 'SOFTWARE',
  kana: 'ソフトウェア',
  signal: 'SIG.APP // FRUIT.SYS',
  description: `Software by ${identity.personalName}. Fruit-named apps, including Tangerine, a tab manager.`,
  lede: 'Fruit-named apps. Tangerine is a tab manager. Everything else on this page is still open.',
  homeBlurb: 'Fruit-named apps · Tangerine',

  tile: {
    subtitle: 'Fruit-named apps',
    status: 'Tangerine · tab manager',
  },

  blocks: {
    onRecord: {
      heading: 'On record',
      body: text('Apps are named after fruits. Tangerine is a tab manager.'),
    },
    selectedWork: {
      heading: 'Selected work',
      items: [
        {
          title: text('Tangerine'),
          rows: [
            { label: 'What it is', value: text('Tab manager') },
            { label: 'Role', value: gap('your role') },
            { label: 'Tech', value: gap('tech used') },
            { label: 'Link', value: gap('live / GitHub') },
            { label: 'Why it is here', value: gap('why it is worth showing') },
          ],
        },
        {
          title: gap('project name'),
          rows: [
            { label: 'What it is', value: gap('what it is') },
            { label: 'Role', value: gap('your role') },
            { label: 'Tech', value: gap('tech used') },
            { label: 'Link', value: gap('live / GitHub') },
          ],
        },
      ],
    },
    skills: {
      heading: 'Skills',
      items: [
        { label: 'Languages', value: gap('languages') },
        { label: 'Frameworks', value: gap('frameworks') },
        { label: 'Tools / infra', value: gap('tools and infra') },
      ],
    },
    experience: {
      heading: 'Experience',
      items: [
        { label: 'Roles', value: gap('roles, companies, dates') },
        { label: 'Resume', value: gap('PDF or "on request"') },
      ],
    },
    availability: {
      heading: 'Availability',
      items: [{ label: 'Status', value: gap('open to roles, contract, or not looking') }],
    },
    links: {
      heading: 'Links',
      items: [
        { label: 'GitHub', value: gap('GitHub URL') },
        { label: 'LinkedIn', value: gap('LinkedIn URL') },
        { label: 'Resume', value: gap('resume PDF') },
      ],
    },
  },
};

/**
 * Resume the Software page prints.
 * Source of truth: /workspace/Resume (branch main), src/body/*.js — copied verbatim
 * (only uncommented entries). Phone number intentionally omitted (public site).
 * The displayed name comes from the shared identity. Edit this object
 * to update the resume; ResumeView.astro only renders it.
 */
export interface ResumeRole { company: string; position: string; time: string; points: string[] }
export interface ResumeProject { slug: string; name: string; time: string; points: string[] }
export interface ResumeLink { label: string; text: string; href?: string; placeholder?: boolean }

export const resume = {
  name: { accent: nameAccent, rest: nameRest.join(' ') },
  /** Not in the resume source. Same title as the section above. */
  title: 'Software Engineer',
  links: [
    { label: 'EMAIL', text: 'kevin.yu.fu@gmail.com', href: 'mailto:kevin.yu.fu@gmail.com' },
    { label: 'LINKEDIN', text: 'linkedin.com/in/kevin-yu-fu', href: 'https://ca.linkedin.com/in/kevin-yu-fu' },
    { label: 'GITHUB', text: 'github.com/kevinyufu', href: 'https://github.com/KevinYuFu' },
  ] as ResumeLink[],
  skills: {
    languages: ['Python', 'PHP', 'Java', 'c++', 'c#', 'TypeScript', 'JavaScript', 'React', 'SQL', 'PostgreSQL', 'Laravel', 'Bash'],
    tools: ['Git', 'AWS', 'Claude Code'],
  },
  experience: [
    { company: 'Parallel Studios', position: 'Engineer', time: 'April 2024 – June 2025', points: [
      'Software Engineer for an AI driven simulation game. (Typescript, postgresql, HTMX, Tailwind)',
      'Increased control and reliability of character behavior by separating AI engines to handle dedicated tasks.',
    ] },
    { company: 'Amazon', position: 'Backend Engineer', time: 'Sept 2022 – March 2024', points: [
      'Software Engineer on advertising web service team with focus on migrating the web service architecture to AWS. (Java, Typescript, AWS)',
    ] },
    { company: 'Electronic Arts', position: 'Full Stack Engineer', time: 'Feb 2020 – Aug 2022', points: [
      'Server Engineer for mobile game prototyping team, building a microservice from ground up. (PHP, Laravel, AWS: DynamoDB, ECS, Lambda)',
      'Led a rapid prototyping initiative developing 4 games in 4 weeks. Authored game design docs, strategized daily targets, delegated tasks to artists and coordinated with engineers through UML diagrams.',
    ] },
  ] as ResumeRole[],
  projects: [
    { slug: 'rivals-gaming-rave', name: 'Rivals Gaming Rave', time: 'Dec 2025 - March 2026', points: [
      'Founder of Rivals, a gaming rave which combining esports competitions with high energy music to build a new party experience for gamers.',
    ] },
    { slug: 'jstdrmn-academy-manager', name: 'JSTDRMN Academy Manager', time: 'Oct 2025 - Present', points: [
      'Lead the academy division of an artist incubator, designing and delivering result driven music production courses that help students build release ready tracks and performance skills.',
      'Handle marketting and social media.',
      'Manage staff, interns, and project logistics from planning through completion.',
    ] },
    { slug: 'ultimate-tab-manager', name: 'Ultimate Tab Manager', time: 'April 2026 - Present', points: [
      'Design and developed an advanced tab manager for tab hoarders.',
    ] },
  ] as ResumeProject[],
  education: { school: 'University of Waterloo', lines: ['B.S. Computer Science', 'Music Minor', 'Graduated April 2019'] },
  /** Public PDF of the main resume. null => disabled placeholder button.
   *  The existing main.pdf includes the phone number, so it is not published. */
  pdf: null as string | null,
};
