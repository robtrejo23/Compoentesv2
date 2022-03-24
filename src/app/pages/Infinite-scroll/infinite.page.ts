import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {
    const data2 = Array(20);

    setTimeout(() => {
      this.data.push(...data2);
      this.infiniteScroll.complete();

      //Validar para que el infinitScroll se termine
      if(this.data.length > 100) {
        this.infiniteScroll.disabled = true;
      }
    }, 1500);

    
  }

}
