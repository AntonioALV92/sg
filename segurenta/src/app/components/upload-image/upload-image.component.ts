import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  constructor() {
    this.imgURL = 'https://i.ebayimg.com/images/g/ZacAAOSwGIZcOSuL/s-l400.jpg';
   }

  ngOnInit() {
  }
  preview(files) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Solo son soportadas imágenes.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = ($event) => {
      this.imgURL = reader.result;
    };
  }


}
