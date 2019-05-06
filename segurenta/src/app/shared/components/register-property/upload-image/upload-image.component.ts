import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpClient, HttpClientModule, HttpRequest, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PropiedadService } from 'src/app/services/propiedad/propiedad.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  uploadForm: FormGroup; 

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

  myFormData: FormData;
  sendableFormData: FormData;
  SERVER_URL = "https://serviciobannerssg.herokuapp.com/api/sr/imagenesPropiedad/34";

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public HttpClient: HttpClient, private propiedad: PropiedadService,
    private formBuilder: FormBuilder) { }

  // cancel() {
  //   this.progress = 0;
  //   if ( this.httpEmitter ) {
  //     this.httpEmitter.unsubscribe();
  //   }
  // }
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  
  uploadFiles2() {
    console.log(this.myFormData);
    this.HttpClient.post<any>(this.SERVER_URL, this.myFormData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err) 
    );
    // this.propiedad.sendImages(this.myFormData);

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
    console.log(this.files);
    console.log(this.files[0].type);
    return new Date();
  }

}
