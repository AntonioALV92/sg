import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { PropiedadService } from 'src/app/services/propiedad/propiedad.service';
import { ActivatedRoute } from "@angular/router";
import { SessionService } from 'src/app/services/session/session.service';

// import { ShowRequirementsComponent } from '../show-requirements/show-requirements.component';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  isRenter: boolean;
  isAdviser: boolean;
  // fileNameDialogRef: MatDialogRef<ShowRequirementsComponent>;
  imageSelected: string;
  datosUsuario: any;
  idProperty: number;

  //@ViewChild('exampleModal') exampleModal: ModalDirective;
  property = {
      alias: 'DEPARTAMENTO 87m2 Del Valle, CDMX',
      periodicidad: 'Mensual',
      precioRenta: 10000,
      mantenimiento: 500,
      // tslint:disable-next-line:max-line-length
      descripcion: 'Estrene precioso departamento en piso 12, con balcón, finos acabados, hermosa vista, fascinantes amenidades desde pista de hielo hasta servicios básicos, desarrollo vanguardista, ecológico, con servicios económicos, valet parking y vigilancia las 24 hrs.',
      estatus: 'Disponible',
      urlVideo: './assets/video/videoPrueba.mp4',
      imagenes: [
        { url: './assets/img/1.jpg', orden: 1 },
        { url: './assets/img/2.jpg', orden: 2 },
        { url: './assets/img/3.jpeg', orden: 3 },
        { url: './assets/img/1.jpg', orden: 4 },
        { url: './assets/img/2.jpg', orden: 5 },
        { url: './assets/img/3.jpeg', orden: 6 },
        { url: './assets/img/1.jpg', orden: 7 },
        { url: './assets/img/2.jpg', orden: 8 }
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
      reglas: [
        { tipo: 'fas', icono: 'bed' },
        { tipo: 'fas', icono: 'toilet' },
        { tipo: 'fas', icono: 'expand-arrows-alt' },
        { tipo: 'fas', icono: 'bed' },
        { tipo: 'fas', icono: 'toilet' },
        { tipo: 'fas', icono: 'expand-arrows-alt' }
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
      },
      asesor: {
        imagen: './assets/img/usrPrueba.png',
        disponibilidad: 'Lun-Sab, 10:00 - 10:45'
      }
    };
    constructor(private dialog: MatDialog, private propiedad: PropiedadService, 
      private route: ActivatedRoute, private session: SessionService) {
      this.isRenter = false;
      this.isAdviser = true;
      this.imageSelected = '';
      console.log(this.property);
   }

  

  ngOnInit() {
    this.datosUsuario = this.session.getDataUser();
    this.idProperty = Number(this.route.snapshot.paramMap.get("idProperty"));
    console.log('id Propiedad', this.idProperty);
  }

  deleteProperty(){
    let idProperty = 1;
    this.propiedad.deleteProperty(idProperty);
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
    // this.fileNameDialogRef = this.dialog.open(ShowRequirementsComponent, dialogConfig);
  }

  changeImage(urlImage: string) {
    this.imageSelected = urlImage;
  }

  showVideo() {
    this.imageSelected = '';
  }


}
