import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ShowRequirementsComponent } from '../show-requirements/show-requirements.component';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  fileNameDialogRef: MatDialogRef<ShowRequirementsComponent>;
  property = {
      alias: 'Departamento Del Valle',
      periodicidad: 'Mensual',
      precioRenta: 10000,
      mantenimiento: 500,
      // tslint:disable-next-line:max-line-length
      descripcion: 'Estrene precioso departamento en piso 12, con balcón, finos acabados, hermosa vista, fascinantes amenidades desde pista de hielo hasta servicios básicos, desarrollo vanguardista, ecológico, con servicios económicos, valet parking y vigilancia las 24 hrs.',
      estatus: 'Disponible',
      urlVideo: './assets/video/videoPrueba.mp4',
      imagenes: [
        { url: './assets/img/imgPrueba3.jpg', orden: 1 },
        { url: './assets/img/imgPrueba3.jpg', orden: 2 },
        { url: './assets/img/imgPrueba3.jpg', orden: 3 },
        { url: './assets/img/imgPrueba3.jpg', orden: 4 },
        { url: './assets/img/imgPrueba3.jpg', orden: 5 },
        { url: './assets/img/imgPrueba3.jpg', orden: 6 },
        { url: './assets/img/imgPrueba3.jpg', orden: 7 },
        { url: './assets/img/imgPrueba3.jpg', orden: 8 }
      ],
      noCitas: 15,
      caracteristicas: [
        { valor: '89', tipo: 'fas', icono: 'expand-arrows-alt'},
        { valor: '2', tipo: 'fas', icono: 'bed'},
        { valor: '1', tipo: 'fas', icono: 'toilet'},
        { valor: '1', tipo: 'fas', icono: 'expand-arrows-alt'},
        { valor: '2', tipo: 'fas', icono: 'bed'},
        { valor: '135', tipo: 'fas', icono: 'toilet'}
      ],
      amenidades: [
        { tipo: 'fas', icono: 'bed' },
        { tipo: 'fas', icono: 'toilet' },
        { tipo: 'fas', icono: 'expand-arrows-alt' },
        { tipo: 'fas', icono: 'bed' },
        { tipo: 'fas', icono: 'toilet' },
        { tipo: 'fas', icono: 'expand-arrows-alt' },
        { tipo: 'fas', icono: 'bed' },
        { tipo: 'fas', icono: 'toilet' },
        { tipo: 'fas', icono: 'expand-arrows-alt' },
        { tipo: 'fas', icono: 'bed' }
      ],
      fechaAlta: '17 Marzo 2019',
      direccion: {
        calle: 'López Díaz de Armendáriz',
        noInterior: '',
        noExterior: '110',
        codigoPostal: 11000,
        colonia: 'Lomas de Chapultepec IV Secc',
        delegacion: 'Miguel Hidalgo',
        ciudad: 'CDMX',
        estado: 'CDMX',
        pais: 'México',
        latitud: '19.370006',
        longitud: '-99.266552'
      }
    };
  constructor(private dialog: MatDialog) {
    console.log(this.property);
   }

  ngOnInit() {
  }

  openViewer() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '100vw';
    dialogConfig.maxWidth = '95vw';
    
    dialogConfig.position = {
      top: '100px',
      left: '200px'
    };
    this.fileNameDialogRef = this.dialog.open(ShowRequirementsComponent, dialogConfig);
  }

}
