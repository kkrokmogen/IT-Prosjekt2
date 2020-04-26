import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { UndercatDetailComponent } from './services/undercat-detail/undercat-detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    //{ path: '', redirectTo: 'hjem', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'tjenester', component: ServicesComponent, children: [
        {path: ':id', component: ServiceDetailComponent, children: [
            {path:':id', component: UndercatDetailComponent},
            {path: ':id', component:UndercatDetailComponent}
        ]}
    ]},
    { path: 'om-oss', component: AboutComponent },
    { path: 'kontakt', component: ContactComponent },
]; 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}