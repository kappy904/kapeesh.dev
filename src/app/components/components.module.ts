import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HeaderComponent} from './header/header.component'
import {RouterModule} from '@angular/router'
import { NavigationComponent } from './navigation/navigation.component'



@NgModule({
    declarations: [
        HeaderComponent,
        NavigationComponent
    ],
    exports: [
        HeaderComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ComponentsModule { }
