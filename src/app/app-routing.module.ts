import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
	{ path: 'testimonials', loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule) },
	{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
	{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
	{ path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
