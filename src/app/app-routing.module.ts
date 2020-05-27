import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ProductGroupsComponent } from './services/product-groups/product-groups.component';
import { ProductDevelopmentComponent } from './services/product-development/product-development.component';
import { PackagingComponent } from './services/packaging/packaging.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'tjenester', component: ServicesComponent, children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'produktutvikling'
            },
            {
                path: 'produktutvikling', component: ProductDevelopmentComponent
            },
            {   path: 'produktgrupper', component: ProductGroupsComponent },

            {   path: 'forpakning', component: PackagingComponent }
        ]
    },
    { path: 'om-oss', component: AboutComponent },
    { path: 'kontakt', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
