import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HeaderComponent} from './header/header.component'
import {RouterModule} from '@angular/router'
import { NavigationComponent } from './navigation/navigation.component';
import { TestimonialRightComponent } from './testimonial-right/testimonial-right.component';
import { TestimonialLeftComponent } from './testimonial-left/testimonial-left.component';
import { PortfolioComponent } from './portfolio/portfolio.component'



@NgModule({
    declarations: [
        HeaderComponent,
        NavigationComponent,
        TestimonialRightComponent,
        TestimonialLeftComponent,
        PortfolioComponent
    ],
    exports: [
        HeaderComponent,
        NavigationComponent,
        TestimonialLeftComponent,
        TestimonialRightComponent,
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ComponentsModule { }
