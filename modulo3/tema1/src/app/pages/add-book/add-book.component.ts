import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { ServiceBookService } from '../../shared/books.service';


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  public libroId?: number
  public usuarioId?: number
  public titulo?: string
  public estilo?: string
  public autor?: string
  public precio?: number
  public imagenUrl?: string
  public libroEncontrado?: Book

  constructor(public serviceBookService: ServiceBookService,) {

  }

  agregarLibro() {
    this.libroEncontrado = this.serviceBookService.getAll().find(book => book.id_book === this.libroId);
    if (this.libroEncontrado) {
      alert('El id del libro ya existe');
      return;
    }

    if (!this.libroId) {
      alert('El id del libro no puede estar vacio');
      return;
    }

    const nuevoLibro = new Book(this.libroId, this.usuarioId, this.titulo, this.estilo, this.autor, this.precio, this.imagenUrl);

    this.libroId
    this.usuarioId
    this.titulo
    this.estilo
    this.autor
    this.precio
    this.imagenUrl

    this.serviceBookService.add(nuevoLibro);

  }

  ngOnInit() {
  }

}
