import { Component, OnInit } from '@angular/core';
interface Componentes {
  icono: string,
  name: string,
  path: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  componentes: Componentes[] = [
    {
      icono:'clipboard',
      name:'action-sheet',
      path:'\action-sheet'
    },
    {
      icono:'alert-circle',
      name:'alert',
      path:'\alert'
    }, 
    {
      icono:'alert-circle',
      name:'Avatar',
      path:'\Avatar'
    },
    {
      icono:'alert-circle',
      name:'Buttons',
      path:'\Buttons'
    },
    {
      icono:'alert-circle',
      name:'Cards',
      path:'\Cards'
    },
    {
      icono:'alert-circle',
      name:'Checks',
      path:'\Checks'
    },
    {
      icono:'alert-circle',
      name:'Fab',
      path:'\Fab'
    },
    {
      icono:'alert-circle',
      name:'Grid',
      path:'\Grid'
    },
    {
      icono:'alert-circle',
      name:'Infinite Scroll',
      path:'\Infinite Scroll'
    },
    {
      icono:'alert-circle',
      name:'Input Forms',
      path:'\InputForms'
    },
    {
      icono:'',
      name:'List-Sliding',
      path:'\List-Sliding'
    },
    {
      icono:'',
      name:'List-Recorder',
      path:'\List-Recorder'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
