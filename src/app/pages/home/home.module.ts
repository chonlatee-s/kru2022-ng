import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {CarouselModule} from 'primeng/carousel';
import { CompetitorsTopModule } from 'src/app/shared/layout-main/competitors-top/competitors-top.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    CompetitorsTopModule
  ]
})
export class HomeModule { }
