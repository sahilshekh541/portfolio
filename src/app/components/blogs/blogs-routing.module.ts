import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { PerformanceOptimizationComponent } from './performance-optimization/performance-optimization.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsListComponent,
    data: {
      title: 'Blog | Sahil Shekh — Tech Insights & Web Development Tutorials',
      description: 'Explore a collection of articles, tutorials, and insights on Angular, Web Performance, and modern Software Engineering by Sahil Shekh.',
      keywords: 'Software Engineering Blog, Angular Performance, Web Development Tutorials, Sahil Shekh, Frontend Optimization, Full-stack Development, TypeScript, Coding Best Practices, Tech Insights',
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
      uploadDate: '2026-04-14'
    }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRouterModule {}
