import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TypeProperty, CatalogItems } from '../../interfaces/catalog.interface';
import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';

@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.css']
})
export class RegisterPropertyComponent implements OnInit {
  n: number;

  registerPictures: FormGroup;
  typeProperties: Array<TypeProperty>;
  selectedProperty: TypeProperty;
  rules: CatalogItems;
  amenities: CatalogItems;
  public catPropiedades: any;

  constructor( private catalog: CatalogosService) {
    this.n = 1;
    // this.typeProperties = [
    //   new TypeProperty( 1, 'Casa', false),
    //   new TypeProperty( 2, 'Departamento', false ),
    //   new TypeProperty( 3, 'Local Comercial', false ),
    //   new TypeProperty( 4, 'Terrenos', false ),
    //   new TypeProperty( 5, 'Bodega', false ),
    //   new TypeProperty( 6, 'Edificio', false ),
    //   new TypeProperty( 7, 'Rancho', false ),
    //   new TypeProperty( 8, 'Oficina', false ),
    // ];
    this.rules = [
      {id: 1, value: 'No mascotas'},
      {id: 2, value: 'No niños'},
      {id: 3, value: 'No plantas'},
      {id: 4, value: 'Solo mujeres'},
      {id: 5, value: 'Solo estudiantes'},
      {id: 6, value: 'Solo hombres'},
    ];

    this.amenities = [
      {id: 1, value: 'Gimnasio'},
      {id: 2, value: 'Alberca'},
      {id: 3, value: 'Minisuper'},
      {id: 4, value: 'Centro comerciales'},
      {id: 5, value: 'Lavanderia'},
      {id: 6, value: 'Bussiness center'},
      {id: 7, value: 'SPA'},
      {id: 8, value: 'Transporte público'},
    ];
  }

  ngOnInit() {
    this.getTipoPropiedad();
  }

  private async getTipoPropiedad() {
    this.catPropiedades = await this.catalog.getTipoPropiedades();
    console.log(this.catPropiedades);
    this.typeProperties = this.catPropiedades;
  }

  selectProperty(id: number): void {
    this.typeProperties.forEach(element => {
      element.selected = false;
      if (element.id === id) {
        element.selected = true;
        this.selectedProperty = element;
        console.log(this.selectedProperty);
      }
    });
  }

  step(n: number) {
    this.n = n;
  }

}
