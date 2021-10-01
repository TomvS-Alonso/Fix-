import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/', icon: 'mail' },
    { title: 'Chat', url: '/', icon: 'chatbox' },
    { title: 'Acerca de', url: '/about', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/', icon: 'heart' },
    { title: 'Cerrar sesion', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}
