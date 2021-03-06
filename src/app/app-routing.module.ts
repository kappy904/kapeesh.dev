import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'


const routes: Routes = [
	{ path: 'testimonials', loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule) },
	{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { animation: 'Fade'} },
	{ path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
	{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
	{ path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	}
]

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
