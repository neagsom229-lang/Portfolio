/**
 * Your Websites / Projects
 * -------------------------------------------------------------------------
 * This is the ONLY file you need to edit to add, remove, or update the
 * websites shown on your Portfolio page.
 *
 * To add a new website, copy one of the objects below, paste it into the
 * array, and fill in your own details. That's it — it will automatically
 * show up on the site with filtering, a thumbnail, and a "Visit Website"
 * button.
 *
 * Fields:
 *  - id:          A unique number (just increase it by 1 for each new item)
 *  - title:       The name of the website / project
 *  - category:    Used for the filter buttons (e.g. "Web App", "E-Commerce",
 *                 "Landing Page", "School Project"). Reuse categories you've
 *                 already used to group similar projects together.
 *  - description: A short 1-2 sentence summary of what it does
 *  - url:         The live link to the website (include https://)
 *  - image:       (optional) Path to a screenshot, e.g. "/assets/img/portfolio/mysite.jpg".
 *                 Put the image file inside public/assets/img/portfolio/
 *                 Leave this blank/omit it to show an automatic placeholder
 *                 thumbnail instead.
 *  - tags:        (optional) An array of short skill/tech tags, e.g. ["React", "Node.js"]
 */

const projects = [
 {
  id: 1,
  title: 'TraceGeo',
  category: 'Web App',
  description:
    'AI-powered OSINT image geolocation tool that identifies where a photo was taken using Google Gemini AI, a landmark database, and multi-factor confidence scoring — with Street View integration and exportable OSINT reports.',
  url: 'https://lookforgeo.onrender.com',
  image: '/assets/img/products/tracegeo.png',
  tags: ['Laravel', 'PHP', 'Gemini AI', 'Leaflet.js', 'OpenStreetMap'],
},
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description:
      'A online store with product catalog, cart, secure checkout, and an profile user dashboard for managing inventory and orders.',
    url: 'https://sn-clothing-ecommerce-4zqs.vercel.app/',
    image: '/assets/img/products/ecommerce.png',
    tags: ['Frontend Development'],
  },
{
  id: 3,
  title: 'SPMS System',
  category: 'Web Application',
  description: 'A comprehensive Sale and Product Management System with real-time inventory tracking, order processing, customer management, analytics dashboard, and responsive UI.',
  url: 'https://spms-dashboard-pro-git-main-chheangsamnangs-projects.vercel.app/',
  image: '/assets/img/products/spms.png',
  tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Backend', 'Responsive'],
},
];

export default projects;
