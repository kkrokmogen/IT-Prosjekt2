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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    ProductDevComponent,
    ProductGroupComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
