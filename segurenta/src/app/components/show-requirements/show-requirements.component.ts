import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-requirements',
  templateUrl: './show-requirements.component.html',
  styleUrls: ['./show-requirements.component.css']
})
export class ShowRequirementsComponent implements OnInit {
  pdfSrc = '/assets/documents/Requisitos.pdf';
  page: number;
  page2 = this.page + 1;
  totalPages: number;
  isLoaded: boolean;
  name: string;
  constructor() {
    this.page = 1;
    this.isLoaded = false;
    this.name = 'Requisitos';
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
    // this.page2++;
  }

  prevPage() {
    this.page--;
    // this.page2--;

  }

  ngOnInit() {
  }

}
