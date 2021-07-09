import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import {ROUTES} from '../constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  routes: Routes = [];

  ngOnInit() {
    // Checks for a name on the route before creating a button.
    for(let route of ROUTES) {
      if (route.data && route.data.routeName) {
        this.routes.push(route);
      }
    }
  }
}
