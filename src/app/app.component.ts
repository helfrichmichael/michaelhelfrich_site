import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Event, NavigationCancel, NavigationError, NavigationStart, NavigationEnd, Router, Routes } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

import { ROUTES } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);
  loading = false;
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

    // Listen to each of the events and set the page title and also show a 
    // loading bar as needed.
    this.router.events.pipe(takeUntil(this.destroyed)).subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd: {
          let child = this.activatedRoute.firstChild;

          while (child!.firstChild) {
            child = child!.firstChild;
          }

          if (child && child.snapshot.data.routeName) {
            this.title.setTitle(`${siteName} - ${child.snapshot.data.routeName}`);
          } else {
            this.title.setTitle(siteName);
          }
          this.loading = false;
          break;
        }
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

}
