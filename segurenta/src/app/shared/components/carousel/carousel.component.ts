import { Component, OnInit } from '@angular/core';
import { linkApp } from 'src/app/shared/constants/constants-url';
import { BannerService } from 'src/app/services/banner/banner.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public link;
  catBanner: any;
  items: any;
  constructor(private banner: BannerService) {
    this.link = linkApp;
  }

  ngOnInit() {
    this.getBanner();
  }

  private async getBanner() {
    this.catBanner = await this.banner.getBanner();
    this.items = this.catBanner.items;
  }

}
