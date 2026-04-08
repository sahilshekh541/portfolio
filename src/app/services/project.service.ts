import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  details: string;
  problem: string;
  solution: string;
  improvements: {
    seo: { before: string; after: string };
    performance: { before: string; after: string };
  };
  image: string;
  category: string;
  role: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'ownai',
      title: 'ownAI',
      details: 'Built the ownAI portfolio website featuring animated, visually striking landing pages with seamless functionality, improved performance, and enhanced SEO optimization.',
      problem: 'The previous portfolio lacked dynamic engagement and suffered from slow load times, leading to a high bounce rate and poor search engine visibility.',
      solution: 'Implemented GSAP for sophisticated animations and optimized the asset delivery pipeline. Used Angular’s lazy loading and server-side rendering hints to boost performance.',
      improvements: {
        seo: { before: '62', after: '100' },
        performance: { before: '54', after: '95' }
      },
      image: 'assets/images/ownai-project.webp',
      category: 'Web Engineering',
      role: 'Lead Frontend Developer',
      technologies: ['Angular', 'GSAP', 'Bootstrap', 'TypeScript']
    },
    {
      id: 'maximumlife',
      title: 'MaximumLife',
      details: 'MaximumLife is a task and vision management platform designed for tutors and trainees to track daily progress, assign tasks, and manage goals.',
      problem: 'Trainees struggled to stay aligned with long-term goals due to fragmented task tracking and lack of visual feedback on their progress.',
      solution: 'Developed a centralized vision board and progress tracking dashboard. Integrated real-time updates and task assignment modules for better tutor-trainee coordination.',
      improvements: {
        seo: { before: '45', after: '92' },
        performance: { before: '40', after: '88' }
      },
      image: 'assets/images/maximumlife-project.webp',
      category: 'Productivity Tool',
      role: 'Full Stack Developer',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io']
    },
    {
      id: 'oms',
      title: 'OMS (Organisation management system)',
      details: 'OMS is a role-based application designed to streamline organizational workflows with secure permissions and scalable architecture.',
      problem: 'The organization used manual processes for role assignments which led to security vulnerabilities and operational bottlenecks.',
      solution: 'Engineered a robust RBAC (Role-Based Access Control) system with a brand-consistent UI/UX. Automated workflow approvals and permission management.',
      improvements: {
        seo: { before: '30', after: '85' },
        performance: { before: '35', after: '90' }
      },
      image: 'assets/images/oms-saas-app.webp',
      category: 'SaaS Platform',
      role: 'Backend Architect',
      technologies: ['Angular', 'NestJS', 'MongoDB', 'Docker']
    },
    {
      id: 'misk',
      title: 'Misk',
      details: 'Misk is an eCommerce platform for a premium perfume brand, focusing on an elegant shopping experience and smooth checkout.',
      problem: 'The existing store had a complex checkout flow and unoptimized images, resulting in abandoned carts and slow mobile performance.',
      solution: 'Streamlined the checkout process to three simple steps and implemented advanced image optimization and caching strategies.',
      improvements: {
        seo: { before: '55', after: '96' },
        performance: { before: '48', after: '94' }
      },
      image: 'assets/images/misk-perfume-project.webp',
      category: 'E-commerce',
      role: 'Frontend Developer',
      technologies: ['Vue.js', 'Shopify API', 'Tailwind CSS', 'PWA']
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find(p => p.id === id));
  }
}
