import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-routing.module';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [HomeComponent, ProjectDetailComponent],
  imports: [CommonModule, HomeRouterModule],
})
export class HomeModule {}
