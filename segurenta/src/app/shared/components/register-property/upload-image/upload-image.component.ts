import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpClient, HttpClientModule, HttpRequest, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  accept = 'image/*';
  files: File[] = [];
  progress: number;
  url = 'https://evening-anchorage-3159.herokuapp.com/api/';
  hasBaseDropZoneOver: boolean = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<{}>;
  lastFileAt: Date;
  maxSizeImage: number = 2097152;
  // maxSizeImage: number = 209;

  myFormData: FormData = new FormData();
  sendableFormData: FormData;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public HttpClient: HttpClient) { }

  // cancel() {
  //   this.progress = 0;
  //   if ( this.httpEmitter ) {
  //     this.httpEmitter.unsubscribe();
  //   }
  // }

  uploadFiles() {
    debugger;
    console.log(this.myFormData);
    this.files.forEach(file => this.myFormData.append('file', file));
    console.log(this.myFormData);

  }

  getDate() {
    console.log(this.files);
    console.log(this.files[0].type);
    return new Date();
  }

  // public imagePath;
  // imgURL: any;
  // public message: string;

  // constructor() {
  //   this.imgURL = './assets/img/imgImagen.png';
  //  }

  // ngOnInit() {
  // }
  // preview(files) {
  //   if (files.length === 0) {
  //     return;
  //   }
  //   const mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = 'Solo son soportadas imágenes.';
  //     return;
  //   }

  //   const reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = ($event) => {
  //     this.imgURL = reader.result;
  //   };
  // }


}
