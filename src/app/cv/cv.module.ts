import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [CvComponent],
    imports: [
        CommonModule,
        CvRoutingModule,
        ComponentsModule
    ]
})
export class CvModule { }
