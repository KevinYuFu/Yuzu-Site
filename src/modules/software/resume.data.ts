/**
 * Resume data for the Software page.
 * Source of truth: /workspace/Resume (branch main), src/body/*.js — copied verbatim
 * (only uncommented entries). Phone number intentionally omitted (public site).
 * Edit this file to update the resume; ResumeView.astro only renders it.
 */
export interface ResumeRole { company: string; position: string; time: string; points: string[] }
export interface ResumeProject { slug: string; name: string; time: string; points: string[] }
export interface ResumeLink { label: string; text: string; href?: string; placeholder?: boolean }

export const resume = {
  name: { accent: 'Yu', rest: 'Fu' },
  /** Not in the resume source; site title from the module. */
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
