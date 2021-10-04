import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/', icon: 'mail' },
    { title: 'Chat', url: '/', icon: 'chatbox' },
    { title: 'Acerca de', url: '/about', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/', icon: 'heart' },
    { title: 'Cerrar sesion', url: '/login', icon: 'log-out' },
  ];
  
constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
