import {Component} from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { fadeInAnimations } from './app.animations'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		fadeInAnimations
	]
})
export class AppComponent {
	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}
}
