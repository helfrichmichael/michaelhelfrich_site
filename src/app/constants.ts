import { Routes } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OutreachComponent } from './outreach/outreach.component';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { GitHubProjectsComponent } from './github-projects/github-projects.component';

export const ROUTES: Routes = [
  { path: 'home', component: WelcomeComponent, pathMatch: 'full', data: { routeName: 'Home' } },
  { path: 'experience', component: ExperienceComponent, data: { routeName: 'Experience' } },
  { path: 'education', component: EducationComponent, data: { routeName: 'Education' } },
  { path: 'portfolio', component: PortfolioComponent, data: { routeName: 'Portfolio' } },
  { path: 'outreach', component: OutreachComponent, data: { routeName: 'Outreach' } },
  { path: 'resume', component: ResumeComponent, data: { routeName: 'Résumé' } },
  { path: 'github', component: GitHubProjectsComponent, data: { routeName: 'GitHub Projects' } },
  { path: 'blog', component: BlogComponent, data: { routeName: 'Blog' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

export const BLOG_URL = 'https://michaelhelfrich.medium.com';
export const GITHUB_URL = 'https://github.com/helfrichmichael';

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

export declare interface GitHubOwnerResponse {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
}

export declare interface GitHubUserRepositoriesResponse {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: GitHubOwnerResponse,
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    forks_url: string,
    collaborators_url: string,
    teams_url: string,
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string,
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: Date,
    updated_at: Date,
    pushed_at: Date,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage?: string,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    forks_count: 0,
    mirror_url?: string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license?: string,
    allow_forking: boolean,
    is_template: boolean,
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string,
}