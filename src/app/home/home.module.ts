import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsermanagementComponent } from '../components/usermanagement/usermanagement.component';
import { MastermanagementComponent } from '../components/mastermanagement/mastermanagement.component';


@NgModule({
  declarations: [
    LayoutComponent,
    UsermanagementComponent,
    MastermanagementComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
