import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CatalogItems, CatalogItems2, ItemCatalog2 } from '../../interfaces/catalog.interface';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';


@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.css']
})
export class PerfiladorComponent implements OnInit {
  n: number;
  public searchText = null;
  selectedValue: number;
  public formEditar: FormGroup;
  // regimenes: CatalogItems;
  regimenes: Array<ItemCatalog2>;
  estadoCivil = [
    {
      id: 1,
      value: 'Soltero'
    },
    {
      id: 2,
      value: 'Casado'
    },
    {
      id: 3,
      value: 'Divorciado'
    },
    {
      id: 4,
      value: 'Viudo'
    }
  ];
  tipoPersona = [
    {
      id: 1,
      value: 'Persona Moral'
    },
    {
      id: 2,
      value: 'Persona Física'
    },
    {
      id: 3,
      value: 'Persona Física con Act.'
    }
  ];
  owners = [
    {
      id: 1,
      name: 'Fulanito Urrutia Martinez',
      CURP: '1BCD121212HOCPSN01'
    },
    {
      id: 2,
      name: 'Juan Godin Perez',
      CURP: '2BCD121212HOCPSN01'
    },
    {
      id: 3,
      name: 'José Alfredo Miravalle',
      CURP: '3BCD121212HOCPSN01'
    },
    {
      id: 4,
      name: 'German Estanislao Jimenez Rosales',
      CURP: '4BCD121212HOCPSN01'
    },
    {
      id: 5,
      name: 'Alejandrina Prado Niño de Rivera',
      CURP: '5BCD121212HOCPSN01'
    },
    {
      id: 6,
      name: 'Sofia Sodi Baltazar',
      CURP: '6BCD121212HOCPSN01'
    }
  ];

  constructor(private formBuilder: FormBuilder, private catalog: CatalogosService) {
    this.n = 1;
    this.selectedValue = 0;
    const tipoP = new FormControl();
  }

  ngOnInit() {
    this.getCatalogos();
  }

  private async getCatalogos() {
    // this.regimenes = await this.catalog.getRegimenes();
    // this.catNacionalidades = await this.catalog.getNacionalidades();
  }

  step(n: number) {
    this.n = n;
  }

}

