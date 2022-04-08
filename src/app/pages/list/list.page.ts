import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>
  @ViewChild(IonList) ionList: IonList

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usuarios = this.usersService.getUsers();
  }

  favorite(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  unread(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}