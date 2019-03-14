import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  maxSizeVideo: number = 20971520;
  constructor() { }

  ngOnInit() {
  }

}
