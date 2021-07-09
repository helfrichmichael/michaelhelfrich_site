import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResumeComponent,
      ],
      imports: [
        AppModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render with PDF object', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('object')).toBeTruthy();
  });
});
