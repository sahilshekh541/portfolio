import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';
import { BLOGS_LIST } from 'src/app/shared/config/constants';
import { Blog } from 'src/app/shared/model/shared.model';
import { SeoService } from 'src/app/services/seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit, OnDestroy {
  blogs: Blog[] = BLOGS_LIST.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  searchText: string = '';
  searchSubject: Subject<string> = new Subject<string>();
  private subscription?: Subscription;

  constructor(
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeData = this.route.snapshot.data;
    if (routeData) {
      this.seoService.updateSeo({
        title: routeData['title'],
        description: routeData['description'],
        keywords: routeData['keywords'],
        ogImage: routeData['ogImage'],
        ogUrl: window.location.href,
        author: 'Sahil Shekh'
      });

      this.seoService.addSchemaMarkup({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Sahil Shekh's Tech Blog",
        "description": routeData['description'],
        "url": window.location.href,
        "author": {
          "@type": "Person",
          "name": "Sahil Shekh"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sahil Shekh Portfolio"
        }
      });
    }

    this.searchSubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.searchText = value;
        this.performSearch(value);
      });
  }

  performSearch(value: string) {
    const query = value.toLowerCase().replace(/\s+/g, '');
    this.blogs = BLOGS_LIST.filter((blog) => {
      const title = blog.title.toLowerCase().replace(/\s+/g, '');
      const description = blog.description.toLowerCase().replace(/\s+/g, '');
      return title.includes(query) || description.includes(query);
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
