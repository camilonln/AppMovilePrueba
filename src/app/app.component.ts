import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Catalogo', url: '/catalogo', icon: 'bag' },
    { title: 'Contactanos', url: '/contactanos', icon: 'mail' }
  ];
  constructor() {}
}
