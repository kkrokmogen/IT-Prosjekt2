import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProductDevComponent } from './services/product-dev/product-dev.component';
import { ProductGroupComponent } from './services/product-group/product-group.component';
import { ContainerComponent } from './services/container/container.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/hjem', pathMatch: 'full'},
    { path: 'hjem', component: HomeComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'tjenester', component: ServicesComponent , 
    children: [
        //{     path: ':id', component: ServiceDetailComponent},

        {path: 'produktutvikling', component: ProductDevComponent},
        {path: 'produktgrupper', component: ProductGroupComponent},
        {path: 'forpakning', component: ContainerComponent},
    ] },
]; 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}