import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


const routes: Routes = [{
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule)
},
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
