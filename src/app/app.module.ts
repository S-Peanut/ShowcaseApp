import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseItemComponent } from './components/showcase-item/showcase-item.component';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContainerComponent } from './components/container/container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { IntersectDirective } from './directives/intersect.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseItemComponent,
    CoverComponent,
    FooterComponent,
    NavBarComponent,
    ContactFormComponent,
    ContainerComponent,
    ContentCardComponent,
    AccordionComponent,
    ProjectCardComponent,
    IntersectDirective,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
