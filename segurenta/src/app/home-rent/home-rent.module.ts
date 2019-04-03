import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRentComponent } from './home-rent.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HomeRentComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeRentModule { }
