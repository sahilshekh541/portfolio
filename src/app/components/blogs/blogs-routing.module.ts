import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { PerformanceOptimizationComponent } from './performance-optimization/performance-optimization.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsListComponent,
    data: {
      title: 'Sahil Shekh Blogs | Frontend & Angular Insights',
      description: 'Explore technical blogs by Sahil Shekh, a junior software developer specializing in Angular, React, and 3D web interfaces.',
      keywords: 'Sahil Shekh Blogs, Sahil shekh 541 blogs, sahil shekh software engineer, ownAI blogs,  Software Engineering Blog, Angular Performance, Web Development Tutorials, Sahil Shekh, Frontend Optimization, Full-stack Development, TypeScript, Coding Best Practices, Tech Insights',
      ogImage: 'assets/images/blogs-thumbnail.png'
    }
  },
  {
    path: 'angular-performance-optimization',
    component: PerformanceOptimizationComponent,
    data: {
      title: 'Performance Optimization in Angular — Complete Practical Guide',
      description: 'Learn how to optimize Angular applications for faster loading speeds, better Lighthouse scores, and improved SEO.',
      ogImage: 'assets/images/angular-performance-optimization-thumbnail.webp',
      keywords: 'Sahil Shekh Blogs, Sahil shekh 541 blogs, sahil shekh software engineer, ownAI blogs,  Software Engineering Blog, Angular Performance, Web Development Tutorials, Sahil Shekh, Frontend Optimization, Full-stack Development, TypeScript, Coding Best Practices, Tech Insights, Angular performance optimization techniques blogs',
      uploadDate: '2026-04-14'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRouterModule { }
