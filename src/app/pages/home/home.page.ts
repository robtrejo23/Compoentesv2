import { Component, OnInit } from '@angular/core';
interface Componentes {
  icono: string,
name: string,
color: string,
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
      icono: 'clipboard',
      name: 'Action Sheet',
      color: 'primary',
      path: '/action-sheet'
    },
  
  
    {
      icono: 'alert-circle',
      name: 'Alert',
      color: 'primary',
      path: '/alert'
    },
    {
      icono: 'person',
      name: 'Avatar',
      color: 'dark',
      path: '/avatar'
    },
    {
      icono: 'radio-button-on',
      name: 'Buttons',
      color: 'dark',
      path: '/buttons'
    },
    {
      icono: 'card',
      name: 'Cards',
      color: 'dark',
      path: '/cards'
    },
    {
      icono: 'shield-checkmark',
      name: 'Chekcs',
      color: 'dark',
      path: '/checks'
    },
    {
      icono: 'calendar',
      name: 'Date-Time',
      color: 'dark',
      path: '/date-time'
    },
    {
      icono: 'clipboard',
      name: 'Fab',
      color: 'dark',
      path: '/fab'
    },
    {
      icono: 'grid',
      name: 'Grid',
      color: 'dark',
      path: '/grid'
    },
    {
      icono: 'add',
      name: 'Infinite-Scroll',
      color: 'danger',
      path: '/infinite-scroll'
    },
    {
      icono: 'code-working',
      name: 'Input-Forms',
      color: 'danger',
      path: '/input-forms'
    },
    {
      icono: 'list',
      name: 'List-Recorder',
      color: 'danger',
      path: '/list-recorder'
    },
    {
      icono: 'albums',
      name: 'List-Sliding',
      color: 'danger',
      path: '/list-sliding'
    },
    {
      icono: 'reload',
      name: 'Loading',
      color: 'danger',
      path: '/loading'
    },
    {
      icono: 'apps',
      name: 'Modal',
      color: 'danger',
      path: '/modal'
    },
    {
      icono: 'albums',
      name: 'Popover',
      color: 'danger',
      path: '/popover'
    },
    {
      icono: 'bar-chart',
      name: 'Progress-Bar',
      color: 'secondary',
      path: '/progress-bar'
    },
    {
      icono: 'refresh-circle',
      name: 'Refresher',
      color: 'secondary',
      path: '/refresher'
    },
    {
      icono: 'search',
      name: 'Search',
      color: 'secondary',
      path: '/search'
    },
    {
      icono: 'bag-add',
      name: 'Segment',
      color: 'secondary',
      path: '/segment'
    },
    {
      icono: 'albums',
      name: 'Slides',
      color: 'secondary',
      path: '/slides'
    },
    {
      icono: 'folder-open',
      name: 'Tabs',
      color: 'secondary',
      path: '/tabs'
    },
    {
      icono: 'document',
      name: 'Toast',
      color: 'secondary',
      path: '/toast'
    },
  
  ]
  
  
    constructor() { }
  
  
  
    ngOnInit() {
    }
  

}
