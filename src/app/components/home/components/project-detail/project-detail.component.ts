import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from 'src/app/shared/config/constants';
import { Project } from 'src/app/shared/model/shared.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  projectDetail?: Project;
  activatedURL: string = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.url.subscribe((value) => {
      this.activatedURL = value[1].path;
      const project = PROJECTS.find(
        (project) => project.url == this.activatedURL,
      );
      this.projectDetail = project;
    });
  }
}
