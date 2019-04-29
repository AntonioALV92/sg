import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeAdviserComponent } from 'src/app/home-adviser/home-adviser.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyPropertyComponent } from './components/my-property/my-property.component';
import { PerfiladorComponent } from '../shared/components/perfilador/perfilador.component';
import { MaterialModule } from '../material.module';

import { FormsModule } from '@angular/forms';
import { FilterPipe} from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    HomeAdviserComponent,
    MenuComponent,
    MyPropertyComponent,
    PerfiladorComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeAdviserModule { }
