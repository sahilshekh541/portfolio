import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project/:url',
    component: ProjectDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouterModule {}
