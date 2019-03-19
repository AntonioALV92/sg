import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpRequest, HttpResponse, HttpClient, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  accept = 'video/*';
  files: File[] = [];
  progress: number;
  url = 'https://evening-anchorage-3159.herokuapp.com/api/';
  hasBaseDropZoneOver: boolean = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<{}>;
  lastFileAt: Date;
  maxSizeVideo: number = 20971520;

  sendableFormData: FormData;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public HttpClient: HttpClient) { }

  ngOnInit() {
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
