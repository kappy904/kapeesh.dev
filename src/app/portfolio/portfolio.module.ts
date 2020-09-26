import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {ComponentsModule} from '../components/components.module';
import {DeferLoadModule} from '@trademe/ng-defer-load';


@NgModule({
	declarations: [PortfolioComponent],
	imports: [
		CommonModule,
		PortfolioRoutingModule,
		ComponentsModule,
		DeferLoadModule
	]
})
export class PortfolioModule {
}
