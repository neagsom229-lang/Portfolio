/**
 * "What I Can Do" capability cards
 * -------------------------------------------------------------------------
 * Edit this file to change the two numbered cards in the Services section.
 *
 * Fields:
 *  - id:           A unique number
 *  - eyebrow:      Small label top-right of the card (e.g. "IT, WEB DEV & QA")
 *  - icon:         A Bootstrap Icons class for the card's icon box
 *  - description:  1-3 sentence summary of this capability
 *  - deliverables: Array of short tag strings shown as pills at the bottom
 */

const capabilities = [
  {
    id: 1,
    eyebrow: 'IT, WEB DEVELOPMENT & QA',
    icon: 'bi bi-code-square',
    description:
      'Building and testing functional digital systems, from database-driven web applications to responsive UIs, with a focus on reliability, usability, and practical problem-solving.',
    deliverables: [
      'Web Development',
      'System Testing',
      'Bug Identification',
      'System Analysis',
      'Database Management',
      'PHP',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    id: 2,
    eyebrow: 'VA & DIGITAL OPERATIONS',
    icon: 'bi bi-headset',
    description:
      'Supporting teams with organized data, documentation, research, and digital workflows while helping keep day-to-day operations accurate and efficient.',
    deliverables: [
      'Data Entry',
      'Data Validation',
      'Document Management',
      'Online Research',
      'Administrative Support',
      'Social Media Management',
      'Content Optimization',
    ],
  },
];

export default capabilities;

/**
 * Tech/tool icons shown in the grid on the left of the section.
 * Each entry is a Bootstrap Icons class (or 'bi bi-circle' fallback) plus a
 * label for accessibility. Swap these for the tools you actually use.
 */
export const techIcons = [
  { icon: 'bi bi-filetype-html', label: 'HTML' },
  { icon: 'bi bi-filetype-css', label: 'CSS' },
  { icon: 'bi bi-filetype-js', label: 'JavaScript' },
  { icon: 'bi bi-filetype-php', label: 'PHP' },
  { icon: 'bi bi-filetype-py', label: 'Python' },
  { icon: 'bi bi-database', label: 'Database' },
  { icon: 'bi bi-git', label: 'Git' },
  { icon: 'bi bi-google', label: 'Google Workspace' },
  { icon: 'bi bi-bootstrap', label: 'Bootstrap' },
  { icon: 'bi bi-filetype-jsx', label: 'React' },
  { icon: 'bi bi-server', label: 'Node.js' },
  { icon: 'bi bi-window', label: 'Vite' },
  { icon: 'bi bi-diagram-3', label: 'Figma' },
  { icon: 'bi bi-terminal', label: 'CLI Tools' },
  { icon: 'bi bi-cloud', label: 'Deployment' },
];
