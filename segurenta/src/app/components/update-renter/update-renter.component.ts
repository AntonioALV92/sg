import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-update-renter',
  templateUrl: './update-renter.component.html',
  styleUrls: ['./update-renter.component.css']
})
export class UpdateRenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#myModal').modal('show');
  }

}
