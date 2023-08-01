import { Component } from '@angular/core';

@Component({
  selector: 'app-root',/* selector con el que se incrusta en otros html */
  templateUrl: './app.component.html',/* plantilla que entrega */
  styleUrls: ['./app.component.css']/* css que utiliza */
})
export class AppComponent {
  nombre = 'Pepe';
  saludo = 'Chau';
}
