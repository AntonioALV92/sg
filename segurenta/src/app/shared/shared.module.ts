import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { ExplorarZonaComponent } from './components/explorar-zona/explorar-zona.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    PublicarComponent,
    ExplorarZonaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NopagefoundComponent,
    PublicarComponent,
    ExplorarZonaComponent,
    FooterComponent
  ]
})
export class SharedModule { }
