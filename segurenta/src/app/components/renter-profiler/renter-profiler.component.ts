import { Component, OnInit } from '@angular/core';
import { CatalogItems, CatalogInterface } from 'src/app/interfaces/catalog.interface';

@Component({
  selector: 'app-renter-profiler',
  templateUrl: './renter-profiler.component.html',
  styleUrls: ['./renter-profiler.component.css']
})
export class RenterProfilerComponent implements OnInit {

  catalogTypePerson: CatalogItems;
  hasGuarantee: boolean;

  constructor() {
    this.catalogTypePerson = [
      { id: 1, value: 'Persona Física'},
      { id: 2, value: 'Persona Física c/ Act. Empresarial'},
      { id: 3, value: 'Persona Moral'}
    ];
  }

  ngOnInit() {
  }

}
