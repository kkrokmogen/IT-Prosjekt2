import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { UndercatStartComponent } from './services/undercat-start/undercat-start.component';
import { UndercatDetailComponent } from './services/undercat-detail/undercat-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/hjem', pathMatch: 'full'},
    { path: 'hjem', component: HomeComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'tjenester', component: ServicesComponent , children: [
        {path: ':id', component: ServiceDetailComponent, children: [
            {path:'', component: UndercatStartComponent},
            {path: ':id', component:UndercatDetailComponent}
        ]},
    ] },
]; 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}