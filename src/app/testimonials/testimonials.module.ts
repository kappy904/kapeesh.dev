import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {TestimonialsRoutingModule} from './testimonials-routing.module'
import {TestimonialsComponent} from './testimonials.component'
import {ComponentsModule} from '../components/components.module'


@NgModule({
    declarations: [TestimonialsComponent],
    imports: [
        CommonModule,
        TestimonialsRoutingModule,
        ComponentsModule
    ]
})
export class TestimonialsModule {
}
