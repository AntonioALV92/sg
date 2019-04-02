import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdviserComponent } from 'src/app/home-adviser/home-adviser.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    HomeAdviserComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeAdviserModule { }
