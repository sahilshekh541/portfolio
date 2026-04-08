import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Project, ProjectService } from 'src/app/services/project.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  ngAfterViewInit(): void {
    this.animateProjects();
  }

  animateProjects() {
    gsap.fromTo('.project-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.3
    }, { opacity: 1 });
  }
}
