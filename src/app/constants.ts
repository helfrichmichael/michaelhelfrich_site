import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {WelcomeComponent} from './welcome/welcome.component';

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'home', component: WelcomeComponent, pathMatch: 'full', data: {routeName: "Home"}},
  { path: 'experience', component: ExperienceComponent, data: {routeName: "Experience"}},
  { path: 'education', component: EducationComponent, data: {routeName: "Education"}},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];