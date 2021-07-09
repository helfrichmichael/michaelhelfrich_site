import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {RouterTestingModule} from '@angular/router/testing';

import {ROUTES} from './constants';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(ROUTES),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should have default title 'Michael Helfrich'`, () => {
    const title = TestBed.inject(Title);
    const fixture = TestBed.createComponent(AppComponent);
    spyOn(title, 'getTitle').and.callThrough();
    fixture.detectChanges();

    expect(title.getTitle()).toEqual('Michael Helfrich');
  });

  it('should render the default landing', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('app-toolbar')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });  
});
