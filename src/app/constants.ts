import { Routes } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OutreachComponent } from './outreach/outreach.component';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';

export const ROUTES: Routes = [
  { path: 'home', component: WelcomeComponent, pathMatch: 'full', data: { routeName: 'Home' } },
  { path: 'experience', component: ExperienceComponent, data: { routeName: 'Experience' } },
  { path: 'education', component: EducationComponent, data: { routeName: 'Education' } },
  { path: 'portfolio', component: PortfolioComponent, data: { routeName: 'Portfolio' } },
  { path: 'outreach', component: OutreachComponent, data: { routeName: 'Outreach' } },
  { path: 'resume', component: ResumeComponent, data: { routeName: 'Résumé' } },
  { path: 'blog', component: BlogComponent, data: { routeName: 'Blog' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

export declare interface MediumPostListResponse {
  status: string;
  feed: MediumPostFeedResponse;
  items: MediumPostItemResponse[];
}

export declare interface MediumPostItemResponse {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: {};
  guid: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  title: string;
}

export declare interface MediumPostFeedResponse {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
}