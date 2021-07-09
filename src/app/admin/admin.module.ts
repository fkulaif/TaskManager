import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';

@NgModule({
  declarations: [AboutComponent, DashboardComponent, MyProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent, DashboardComponent, MyProfileComponent],
  providers: [DashboardService]
})
export class AdminModule { }
