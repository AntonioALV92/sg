import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeAdviserComponent } from 'src/app/home-adviser/home-adviser.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyPropertyComponent } from './components/my-property/my-property.component';

@NgModule({
  declarations: [
    HomeAdviserComponent,
    MenuComponent,
    MyPropertyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeAdviserModule { }
