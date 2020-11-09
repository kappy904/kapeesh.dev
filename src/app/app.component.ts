import {Component} from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { fadeInAnimation } from './app.animations'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		fadeInAnimation
	]
})
export class AppComponent {
	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}
}
