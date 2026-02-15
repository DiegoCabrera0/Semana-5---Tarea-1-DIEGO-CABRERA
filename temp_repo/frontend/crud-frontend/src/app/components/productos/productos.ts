import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/ProductoService';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
})
export class Productos implements OnInit {

  productos: Producto[] = [];

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  agregarProducto() {
    this.productoService.addProducto(this.nuevoProducto).subscribe(() => {
      this.cargarProductos(); // refresca lista
      this.nuevoProducto = { id: 0, nombre: '', precio: 0, stock: 0 }; // limpia form
    });
  }
}
