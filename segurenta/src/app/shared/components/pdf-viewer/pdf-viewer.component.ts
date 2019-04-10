import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styles: []
})
export class PdfViewerComponent {
  public pdfSrc = '/assets/documents/TyC.pdf';
  public page: number;
  public page2 = this.page + 1;
  public totalPages: number;
  public isLoaded: boolean;
  public name: string;

  constructor() {
    this.page = 1;
    this.isLoaded = false;
    this.name = 'Términos y Condiciones';
  }

  public afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  public nextPage() {
    this.page++;
  }

  public prevPage() {
    this.page--;
  }
}
