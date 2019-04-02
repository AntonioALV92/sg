import { Component } from '@angular/core';
import { linkApp } from 'src/app/shared/constants/constants-url';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  year: number;
  public link;
  // fileNameDialogRef: MatDialogRef<PdfViewerComponent>;

  // constructor(private dialog: MatDialog) {
  constructor() {
    this.year = new Date().getFullYear();
    this.link = linkApp;
  }

  openViewer() {
    // this.fileNameDialogRef = this.dialog.open(PdfViewerComponent);
  }

}
