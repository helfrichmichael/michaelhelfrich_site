import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, Routes } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import {ROUTES} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routes: Routes = [];

  constructor(
    private readonly title: Title,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    // Checks for a name on the route before creating a button.
    for (let route of ROUTES) {
      if (route.data && route.data.routeName) {
        this.routes.push(route);
      }
    }

    const siteName = 'Michael Helfrich';
    this.title.setTitle(siteName);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;

        if (!child) {
          return this.activatedRoute.snapshot.data.routeName || siteName;
        }

        while (child.firstChild) {
          child = child.firstChild;
        }

        if (child && child.snapshot.data.routeName) {
          return `${siteName} - ${child.snapshot.data.routeName}`
        } else {
          return siteName;
        }
      })
    ).subscribe((title: string) => this.title.setTitle(title));
  }

}
