import { Blog, Project } from '../model/shared.model';

export const BLOGS_LIST: Blog[] = [
  {
    title: 'Angular Performance Optimization Guide',
    description:
      'Learn practical techniques to improve Angular application speed, reduce bundle size, and enhance user experience.',
    date: 'April 14, 2026',
    slug: '/blogs/angular-performance-optimization',
    thumbnail: 'assets/images/angular-performance-optimization-thumbnail.webp',
  },
];

// projects
export const PROJECTS: Project[] = [
  {
    url: 'ownai-portfolio',
    title: 'ownAI',
    tech: 'Angular',
    image: 'assets/images/ownai-project.webp',
    alt: 'ownAI portfolio website',
    height: 865,
    width: 1920,
    description:
      'Built the ownAI portfolio website featuring animated, visually striking landing pages with seamless functionality, improved performance, and enhanced SEO optimization.',
    overview: [
      'The ownAI website is the company portfolio platform used to showcase products, services, and technical case studies.',
      'The project was originally developed before I joined, but over time the application became outdated in terms of performance, SEO, and maintainability.',
      'To improve user experience and developer productivity, team decided to revamp the entire portfolio with a modern UI, better performance optimization, and scalable architecture.',
      'The main goal of this revamp was to make the website faster, SEO-friendly, and easier to maintain for future feature additions like case studies and project pages.',
    ],
    problems: [
      'Portfolio website took a long time to load.',
      'SEO score was below 60, affecting search visibility.',
      'No coding standards or structured project architecture.',
      'Angular best practices were not followed.',
      'Adding new case study pages required manual development every time.',
    ],
    solutions: [
      'Analyzed performance bottlenecks and applied Angular best practices such as lazy loading, optimized assets, and clean component structure.',
      'Reworked SEO implementation including meta tags, structured content, and accessibility improvements to achieve a perfect SEO score.',
      'Refactored the codebase with proper folder structure, reusable components, and improved readability for new developers.',
      'Built a dynamic reusable case study system, allowing new projects to be added using configuration data instead of creating pages manually.',
    ],
    impact: [
      'Achieved 90+ Performance Score',
      '3x faster to add new case studies',
      'Improved overall user engagement and browsing experience',
    ],
  },
  {
    url: 'maximumlife',
    title: 'Maximumlife',
    tech: 'Angular',
    image: 'assets/images/maximumlife-project.webp',
    alt: 'maximumlife portfolio website',
    height: 871,
    width: 1887,
    description:
      'MaximumLife is a task and vision management platform designed for tutors and trainees to track daily progress, assign tasks, and manage goals.',
    overview: [
      'The project was already developed before I started working on it. During the QA phase, multiple critical bugs were identified, and I took responsibility for stabilizing the application. My primary goal was to <b>fix major functional issues, improve user experience, and relaunch the application without bugs.</b>',
      'Key areas included dashboard updates, theme management (dark/light mode), and fixing issues in the Dreamboard feature where users add goals using text and images.',
    ],
    problems: [
      'Dashboard data was not updating correctly due to improper state management.',
      'Dark and Light mode styles were breaking across multiple screens.',
      'User theme preference was not saved and reset after page refresh.',
      'Dreamboard image preview failed for several file types and did not work as expected.',
    ],
    solutions: [
      'Reviewed the complete codebase and performed testing to identify root causes of dashboard state issues.',
      'Fixed state management logic to ensure dashboard data updates correctly.',
      'Corrected broken CSS styles for Dark and Light mode across the application.',
      'Proposed and implemented storing theme preferences using LocalStorage after approval from senior developers.',
      'Fixed Dreamboard functionality by improving image preview handling and configuring the ngx-gallery package to support features like image rotation, download, and navigation.',
    ],
    impact: [
      'Successfully relaunched the application with 99% of reported bugs resolved',
      'Users can now save and retain Dark/Light mode preferences',
      'Stable and reliable dashboard experience',
    ],
  },
  {
    url: 'querytrack',
    title: 'QueryTrack',
    tech: 'Angular',
    description:
      'QueryTrack is an enterprise-level accounting and finance management application designed to streamline portfolio accounting operations.',
    image: 'assets/images/querytrack.webp',
    alt: 'QueryTrack Project',
    height: 245,
    width: 450,
    overview: [
      'The project founder wanted to introduce new features while maintaining the existing UI design and improving overall usability. I was assigned to enhance the application by adding data management features, improving performance, and solving user experience issues related to large datasets and document processing.',
      'The focus was to make the system <b>more efficient, trackable, and user-friendly</b> for daily operations.',
    ],
    problems: [
      'Thousands of records existed in tables, but users had no filters or search functionality to quickly find specific data.',
      'Bulk document upload and download processes lacked status tracking, so users could not identify successful or failed operations.',
      'Some APIs were triggering twice, increasing server load and operational cost.',
      'Minor UI updates were required frequently, including title changes and theme color adjustments.',
    ],
    solutions: [
      'Explored and utilized NG-ZORRO components to implement sorting and advanced search filters across all required data tables.',
      'Added search functionality on multiple pages to help users quickly locate records within large datasets.',
      'Designed a bulk upload/download tracking system similar to Google Drive, allowing users to view success and failure status for files.',
      'Performed unit testing and optimized application performance by applying OnPush Change Detection Strategy, resolving duplicate API calls.',
      'Implemented UI updates based on client requirements while maintaining design consistency.',
    ],
    impact: [
      'Improved document management visibility and user workflow efficiency',
      'Reduced server costs by eliminating duplicate API call',
      'Faster record discovery using filtering and sorting features',
    ],
  },
  {
    url: 'oms-flutter-app',
    title: 'ownAI - OMS',
    tech: 'Flutter',
    description:
      'ownAI OMS is an employee management mobile application developed using Flutter to simplify daily HR operations.',
    image: 'assets/images/ownai-oms-flutter-app.webp',
    alt: 'ownAI OMS Project',
    height: 480,
    width: 480,
    overview: [
      'ownAI OMS is a mobile employee management application developed using Flutter to simplify daily HR operations such as attendance tracking, break management, and leave monitoring.',
      'Previously, HR teams were maintaining employee records manually, which was time-consuming and error-prone. I was assigned to enhance the existing mobile application by adding missing features, improving usability, and upgrading the application to support modern Android requirements including <b>16 KB page size compatibility.</b>',
      'The goal was to make HR processes <b>faster, reliable, and mobile-friendly.</b>',
    ],
    problems: [
      'User profile edit screen existed but had no working functionality.',
      'QR scanning feature requested camera permission only once; if denied, users had to reinstall the app to grant permission again.',
      'No leave management module, making it difficult for HR to track employee leave records.',
      'Application needed migration to support 16 KB page size for better system compatibility.',
    ],
    solutions: [
      'Implemented full profile edit functionality including avatar image upload with image cropping support.',
      'Improved user experience by handling permission flows dynamically using the <b>permission_handler</b> package.<ul><li>If permission is denied, the app now shows a dedicated permission-required screen guiding users to enable access.</li></ul>',
      'Designed and developed a <b>Leave Management module</b> allowing HR to track employee leave data efficiently.',
      'Successfully migrated the Flutter application to support 16 KB page size, ensuring compatibility with updated platform requirements.',
    ],
    impact: [
      'Improved overall mobile UI and user experience',
      'Reduced manual HR workload through digitized employee management',
      'More stable and user-friendly permission handling',
    ],
  },
  {
    url: 'organisation-management-system',
    title: 'OMS',
    tech: 'Angular',
    image: 'assets/images/oms-saas-app.webp',
    alt: 'oms portfolio website',
    height: 877,
    width: 1024,
    description:
      'OMS (Organization Management System) is a role-based application designed to streamline organizational workflows with secure role and permission-based architecture.',
    overview: [
      'I worked on this project from the early development phase, including building the login system, role-based access control, and core business modules.',
      'The system allows:',
      `<ul>
      <li><b>Admin / Co-Admin: </b>Manage invoices and client details</li>
      <li><b>HR: </b>Manage employees, documents, attendance, and leave records and assigned permissions</li>
      <li><b>Employees: </b>Access punch-in/out data, leave information, profile details</li>
      </ul>`,
      'The main objective was to build a <b>secure, scalable, and permission-based system</b> where each role only accesses authorized features.',
    ],
    problems: [
      'Managing multiple roles (Admin, Co-Admin, HR, Employee) within a single application.',
      'Ensuring users can only access modules based on assigned permissions.',
      'Handling real-time currency conversion (USD to INR and other currencies) for invoice generation.',
      'Manual handling of employee documents and records.',
      'Manual creation and management of employee and client data.',
    ],
    solutions: [
      'Designed and implemented a Role-Based Access Control (RBAC) system using Angular route guards and permission modules.',
      'Built dynamic permission management so HR/Admin can assign module access to employees.',
      'Developed a secure login and authentication flow.',
      'Integrated currency conversion logic for invoices to support USD, INR, and other currencies.',
      `Created structured modules for:
      <ul>
      <li>Employee management</li>
      <li>Client management</li>
      <li>Invoice generation</li>
      <li>Attendance & leave tracking</li>
      </ul>
      `,
      'Built reusable forms and validation logic to streamline employee and client creation.',
      'Improved document handling workflow to make employee record management more organized.',
    ],
    impact: [
      'Secure multi-role application with controlled module access',
      'Reduced manual workflow through structured management system',
      'Automated currency conversion for accurate invoice generation',
      'Centralized employee and client data management',
      'Improved operational efficiency across HR and Admin workflows',
    ],
  },
  {
    url: 'misk-Ecommerce',
    title: 'Misk',
    tech: 'Angular',
    image: 'assets/images/misk-perfume-project.webp',
    alt: 'misk perfume portfolio website',
    height: 734,
    width: 1074,
    description:
      'Misk is a sample eCommerce platform created for portfolio demonstration and experimentation purposes, showcasing product listing, cart management, and performance-optimized UI.',
    overview: [
      'Misk is a practice and experimentation project created to demonstrate eCommerce application development concepts within my portfolio.',
      'The project was built with the help of Lovable for rapid setup and used primarily to test UI development workflows, Angular architecture decisions, and frontend feature implementation.',
      'After initial automated setup limitations, I manually completed and optimized the application to simulate a real-world small business eCommerce experience.'
    ],

    problems: [
      'Needed a realistic eCommerce example project to showcase frontend development skills in the portfolio.',
      'Required quick setup for experimentation while maintaining production-like UI quality.',
      'No backend system available for dynamic product management.',
      'Cart state was resetting, affecting user experience during testing scenarios.',
      'Project required manual refinement after automated setup limitations.'
    ],

    solutions: [
      'Developed a responsive Angular-based eCommerce interface suitable for portfolio demonstration.',
      'Configured product data locally to simulate real product catalog behavior.',
      'Implemented LocalStorage-based cart persistence for better user experience.',
      'Added custom business logic to store cart item dates and auto-clear outdated cart data.',
      'Manually optimized UI structure, navigation flow, and performance after initial rapid setup.'
    ],

    impact: [
      'Demonstrated real-world eCommerce UI implementation within portfolio projects.',
      'Showcased Angular component architecture and state handling techniques.',
      'Improved understanding of rapid prototyping and manual optimization workflows.',
      'Created a practical demo project to represent frontend commerce solutions.'
    ]
  },
  {
    url: 'portfolio-react-based',
    title: 'Portfolio',
    tech: 'React',
    image: 'assets/images/portfolio-project.webp',
    alt: 'portfolio website',
    height: 876,
    width: 1920,
    description:
      'A personal portfolio website designed to showcase developer skills, technical expertise, and real-world implementations with a modern UI.',
    overview: [
      'This portfolio website was developed to showcase my skills, projects, and real-world development experience in a professional and modern way.',
      'The goal was to create a strong personal brand and provide recruiters with a clear understanding of my technical expertise, problem-solving approach, and project contributions.',
      'I designed and developed the application using React with a focus on clean UI design, performance optimization, responsiveness, and SEO best practices.',
      'The portfolio is structured using reusable components and scalable architecture, allowing easy updates and addition of new projects, blogs, and features in the future.'
    ],
    problems: [
      'Needed a professional platform to showcase projects, skills, and real-world experience to recruiters.',
      'Traditional resumes do not effectively demonstrate technical abilities and project impact.',
      'Required a modern and responsive UI to represent personal developer branding.',
      'Performance and SEO optimization were necessary for better online visibility.',
      'Projects and content needed to be easily maintainable and scalable for future updates.'
    ],

    solutions: [
      'Developed a modern personal portfolio using React with a clean and responsive UI.',
      'Created dedicated sections for projects, skills, and experience to clearly present technical expertise.',
      'Implemented reusable components for easier maintenance and scalability.',
      'Applied performance optimization techniques such as optimized assets and efficient rendering.',
      'Improved SEO structure using semantic HTML and proper meta configuration.',
      'Designed the application with a scalable structure allowing easy addition of future projects and content.'
    ],

    impact: [
      'Established strong personal developer branding and online presence.',
      'Improved recruiter engagement through structured project showcase.',
      'High-performance and SEO-friendly portfolio website.',
      'Simplified future updates through reusable and scalable architecture.',
      'Effectively demonstrated real-world development experience.'
    ],
  },

];
