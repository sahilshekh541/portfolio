import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home-routing.module').then(
        (m) => m.HomeRouterModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./components/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
