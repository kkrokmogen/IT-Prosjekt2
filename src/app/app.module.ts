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
import { UndercatListComponent } from './services/undercat-list/undercat-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PackagingComponent } from './services/packaging/packaging.component';
import { ProductDevelopmentComponent } from './services/product-development/product-development.component';
import { ProductGroupsComponent } from './services/product-groups/product-groups.component';
import { ProductDevelopmentInfoComponent } from './services/product-development/product-development-info/product-development-info.component';
import { PackagingInfoComponent } from './services/packaging/packaging-info/packaging-info.component';
import { ProductGroupsInfoComponent } from './services/product-groups/product-groups-info/product-groups-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    DropdownDirective,
    UndercatListComponent,
    ContactComponent,
    AboutComponent,
    PackagingComponent,
    ProductDevelopmentComponent,
    ProductGroupsComponent,
    ProductDevelopmentInfoComponent,
    PackagingInfoComponent,
    ProductGroupsInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
