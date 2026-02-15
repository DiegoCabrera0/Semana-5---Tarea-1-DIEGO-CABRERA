import { Component } from '@angular/core';
import { Productos } from './components/productos/productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Productos],
  templateUrl: './app.html',
})
export class App {}
