import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [PortfolioComponent],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        ComponentsModule
    ]
})
export class PortfolioModule { }
