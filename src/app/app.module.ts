import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material_module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OutreachComponent } from './outreach/outreach.component';
import { ResumeComponent } from './resume/resume.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './not-found/not-found.component';
import { LazyImgLoaderDirective } from './lazy_img_loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    PortfolioComponent,
    OutreachComponent,
    ResumeComponent,
    NotFoundComponent,
    LazyImgLoaderDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
