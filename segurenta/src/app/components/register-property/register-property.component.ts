import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TypeProperty } from '../../interfaces/catalog.interface';

@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.css']
})
export class RegisterPropertyComponent implements OnInit {

  registerPictures: FormGroup;
  typeProperties: Array<TypeProperty>;
  selectedProperty: TypeProperty;

  constructor() {
    this.typeProperties = [
      new TypeProperty( 1, 'Casa', false),
      new TypeProperty( 2, 'Departamento', false ),
      new TypeProperty( 3, 'Local Comercial', false ),
      new TypeProperty( 4, 'Terrenos', false ),
      new TypeProperty( 5, 'Bodega', false ),
      new TypeProperty( 6, 'Edificio', false ),
      new TypeProperty( 7, 'Rancho', false ),
      new TypeProperty( 8, 'Oficina', false ),
    ];
  }

  ngOnInit() {
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

}
