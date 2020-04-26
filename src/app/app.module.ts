import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServiceService } from './services/service.service';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { UndercatListComponent } from './services/undercat-list/undercat-list.component';
import { UndercatDetailComponent } from './services/undercat-detail/undercat-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './services/service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    DropdownDirective,
    ServiceDetailComponent,
    UndercatListComponent,
    UndercatDetailComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
