import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


const routes: Routes = [{
	path: 'testimonials',
	loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule)
},
	{
		path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
	},
	{
		path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
	{path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
	{ path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
