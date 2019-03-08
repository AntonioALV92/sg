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
  maxSize: number = 2048;

  sendableFormData: FormData;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public HttpClient: HttpClient) {}

  cancel() {
    this.progress = 0;
    if ( this.httpEmitter ) {
      console.log('cancelled');
      this.httpEmitter.unsubscribe();
    }
  }

  uploadFiles(files: File[]): Subscription {
    const req = new HttpRequest<FormData>('POST', this.url, this.sendableFormData, {
      reportProgress: true
    });
    return this.httpEmitter = this.HttpClient.request(req)
    .subscribe(
      event => {
        this.httpEvent = event;

        if (event instanceof HttpResponse) {
          delete this.httpEmitter;
          console.log('request done', event);
        }
      },
      error => console.log('Error Uploading', error)
    );
  }

  getDate() {
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
