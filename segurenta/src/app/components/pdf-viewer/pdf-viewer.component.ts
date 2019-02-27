import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  pdfSrc = '/assets/documents/TyC.pdf';
  page: number;
  page2 = this.page + 1;
  totalPages: number;
  isLoaded: boolean;
  name: string;
  constructor() {
    this.page = 1;
    this.isLoaded = false;
    this.name = 'Términos y Condiciones';
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
