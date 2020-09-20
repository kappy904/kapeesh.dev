import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {TestimonialsRoutingModule} from './testimonials-routing.module'
import {TestimonialsComponent} from './testimonials.component'
import {ComponentsModule} from '../components/components.module'
import {DeferLoadModule} from '@trademe/ng-defer-load'


@NgModule({
    declarations: [TestimonialsComponent],
    imports: [
        CommonModule,
        TestimonialsRoutingModule,
        ComponentsModule,
		DeferLoadModule
    ]
})
export class TestimonialsModule {
}
