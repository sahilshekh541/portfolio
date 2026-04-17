import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceOptimizationComponent } from './performance-optimization/performance-optimization.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsRouterModule } from './blogs-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerformanceOptimizationComponent, BlogsListComponent],
  imports: [CommonModule, BlogsRouterModule, FormsModule],
})
export class BlogsModule {}
