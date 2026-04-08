import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectService } from 'src/app/services/project.service';
import { SeoService } from 'src/app/services/seo.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProjectById(id).subscribe(data => {
        if (data) {
          this.project = data;
          this.updateSeo(data);
        } else {
          this.router.navigate(['/projects']);
        }
      });
    }
  }

  updateSeo(project: Project) {
    this.seoService.updateSeo({
      title: `${project.title} - Sahil Shekh Portfolio`,
      description: project.details,
      ogTitle: `${project.title} | Case Study by Sahil Shekh`,
      ogDescription: project.details,
      ogImage: project.image,
      ogUrl: `https://sahilshekh.com/projects/${project.id}`
    });

    this.seoService.addSchemaMarkup({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.details,
      "image": project.image,
      "creator": {
        "@type": "Person",
        "name": "Sahil Shekh"
      }
    });
  }

  ngAfterViewInit(): void {
    this.animateContent();
  }

  animateContent() {
    gsap.from('.reveal-text', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.2
    });

    gsap.from('.image-reveal', {
      duration: 1.5,
      scale: 1.2,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.5
    });
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}
