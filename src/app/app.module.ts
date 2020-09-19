import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ScullyLibModule} from '@scullyio/ng-lib'
import {ComponentsModule} from './components/components.module';
import {MobileService} from './services/mobile.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ScullyLibModule,
		ComponentsModule
	],
	providers: [MobileService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
