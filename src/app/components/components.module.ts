import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HeaderComponent} from './header/header.component'
import {RouterModule} from '@angular/router'
import { NavigationComponent } from './navigation/navigation.component';
import { TestimonialRightComponent } from './testimonial-right/testimonial-right.component';
import { TestimonialLeftComponent } from './testimonial-left/testimonial-left.component'



@NgModule({
    declarations: [
        HeaderComponent,
        NavigationComponent,
        TestimonialRightComponent,
        TestimonialLeftComponent
    ],
	exports: [
		HeaderComponent,
		NavigationComponent,
		TestimonialLeftComponent,
		TestimonialRightComponent
	],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ComponentsModule { }
