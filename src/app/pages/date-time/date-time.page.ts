import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  constructor() { }

  confirm(){
    console.log("Click en guardar")
  }

  reset(){

  }

  ngOnInit() {
  }

}
