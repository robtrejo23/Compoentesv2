import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage implements OnInit {
 check: any[] =[
   {
     val: 'item  1',
     isChecked: true,
     color: 'primary', 
   },
   {

    val: 'item  2',
     isChecked: true,
     color: 'secondary',
  },
  {
    val: 'item  1',
     isChecked: true,
    color: 'thirdy',
  },
 ]
  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }

  verData( event: any){
    console.log(event.data);
  }

}
