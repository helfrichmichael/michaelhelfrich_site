import { Routes } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OutreachComponent } from './outreach/outreach.component';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  { path: 'home', component: WelcomeComponent, pathMatch: 'full', data: { routeName: 'Home' } },
  { path: 'experience', component: ExperienceComponent, data: { routeName: 'Experience' } },
  { path: 'education', component: EducationComponent, data: { routeName: 'Education' } },
  { path: 'portfolio', component: PortfolioComponent, data: { routeName: 'Portfolio' } },
  { path: 'outreach', component: OutreachComponent, data: { routeName: 'Outreach' } },
  { path: 'resume', component: ResumeComponent, data: { routeName: 'Résumé' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];