import { Component, OnInit } from '@angular/core';
import { GitHubUserRepositoriesResponse, GITHUB_URL } from '../constants';
import { GitHubService } from '../github-api.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GitHubProjectsComponent implements OnInit {
  gitHubProjects?: GitHubUserRepositoriesResponse[];
  loading = true;
  error?: Error;
  destroyed: ReplaySubject<boolean> = new ReplaySubject(1);
  gitHubUrl = GITHUB_URL;

  constructor(private readonly gitHub: GitHubService) { }

  ngOnInit(): void {
    this.gitHub.getRepositories().pipe(takeUntil(this.destroyed)).subscribe(result => {
      this.gitHubProjects = result;
      this.loading = false;
    }, (error) => {
      console.error('Failed to retrieve GitHub Projects: ', error);
      this.loading = false;
      this.error = error;
    });
  }

}
