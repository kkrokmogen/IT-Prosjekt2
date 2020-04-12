import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ProductDevComponent } from './services/product-dev/product-dev.component';
import { ProductGroupComponent } from './services/product-group/product-group.component';
import { ContainerComponent } from './services/container/container.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ContainerListComponent } from './services/container/container-list/container-list.component';
import { ContainerItemComponent } from './services/container/container-list/container-item/container-item.component';
import { ServiceService } from './services/service.service';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceItemComponent } from './services/service-list/service-item/service-item.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    ProductDevComponent,
    ProductGroupComponent,
    ContainerComponent,
    DropdownDirective,
    ContainerListComponent,
    ContainerItemComponent,
    ServiceListComponent,
    ServiceItemComponent,
    ServiceDetailComponent
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
