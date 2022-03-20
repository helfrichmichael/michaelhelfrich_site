import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubProjectsComponent } from './github-projects.component';

describe('GitHubProjectsComponent', () => {
  let component: GitHubProjectsComponent;
  let fixture: ComponentFixture<GitHubProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
