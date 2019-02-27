import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  year: number;
  fileNameDialogRef: MatDialogRef<PdfViewerComponent>;
  linkFacebook: string;
  linkInstagram: string;
  linkTwitter: string;
  linkLinkedIn: string;

  constructor(private dialog: MatDialog) {
    this.year = new Date().getFullYear();
    this.linkFacebook = 'https://es-la.facebook.com/Segurenta/';
    this.linkInstagram = 'https://www.instagram.com/segurenta/';
    this.linkTwitter = 'https://twitter.com/segurenta?lang=es';
    this.linkLinkedIn = 'https://mx.linkedin.com/company/segurenta';
  }

  openViewer() {
    this.fileNameDialogRef = this.dialog.open(PdfViewerComponent);
  }


}
