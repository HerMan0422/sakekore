import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { OsakeComponent } from './osake/osake.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [HomeComponent, OsakeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressBarModule
  ]
})
export class HomeModule { }
