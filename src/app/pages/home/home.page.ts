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
      icono:'accessibility-outline',
      name:'Avatar',
      path:'\Avatar'
    },
    {
      icono:'caret-forward-outline',
      name:'Buttons',
      path:'\Buttons'
    },
    {
      icono:'caret-forward-outline',
      name:'Cards',
      path:'\Cards'
    },
    {
      icono:'caret-forward-outline',
      name:'Checks',
      path:'\Checks'
    },
    {
      icono:'caret-forward-outline',
      name:'Fab',
      path:'\Fab'
    },
    {
      icono:'caret-forward-outline',
      name:'Grid',
      path:'\Grid'
    },
    {
      icono:'caret-forward-outline',
      name:'Infinite Scroll',
      path:'\Infinite Scroll'
    },
    {
      icono:'caret-forward-outline',
      name:'Input Forms',
      path:'\InputForms'
    },
    {
      icono:'caret-forward-outline',
      name:'List-Sliding',
      path:'\List-Sliding'
    },
    {
      icono:'caret-forward-outline',
      name:'List-Recorder',
      path:'\List-Recorder'
    },
    {
      icono:'caret-forward-outline',
      name:'loading',
      path:'\loading'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
