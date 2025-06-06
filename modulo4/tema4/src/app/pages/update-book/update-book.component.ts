import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { ServiceBookService } from '../../shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public libroId: number;
  public usuarioId: number;
  public titulo: string;
  public estilo: string;
  public autor: string;
  public precio: number;
  public imagenUrl: string;
  public libroEncontrado: Book;
  public libroModificado: Book;

  constructor(public serviceBookService: ServiceBookService, private toastr: ToastrService) {

  }

  encontrarLibro() {
    this.serviceBookService.getAll().subscribe((resp: Respuesta) => {
      if (resp.ok === false) {
        this.toastr.error(resp.message, 'Error', {
          toastClass: 'ngx-toastr custom-toast-error',
          positionClass: 'toast-bottom-right'
        });
        return;
      }
      this.serviceBookService.books = resp.data;

      this.libroEncontrado = this.serviceBookService.books.find(book => book.id_book === this.libroId);

      if (!this.libroEncontrado) {
        this.toastr.error('El libro no existe', 'Error', {
          toastClass: 'ngx-toastr custom-toast-error',
          positionClass: 'toast-bottom-right'
        });
        return;
      }
    
    this.usuarioId = this.libroEncontrado.id_user;
    this.titulo = this.libroEncontrado.title;
    this.estilo = this.libroEncontrado.type;
    this.autor = this.libroEncontrado.author;
    this.precio = this.libroEncontrado.price;
    this.imagenUrl = this.libroEncontrado.photo;
  })
  }

  modificarLibro() { 
    const libroModificado = new Book(this.libroId, this.usuarioId, this.titulo, this.estilo, this.autor, this.precio, this.imagenUrl);

    this.libroId;
    this.usuarioId;
    this.titulo;
    this.estilo;
    this.autor;
    this.precio;
    this.imagenUrl;
    
    this.serviceBookService.edit(libroModificado).subscribe(() => {
      this.toastr.success('Libro modificado con éxito', 'Éxito', {
        toastClass: 'ngx-toastr custom-toast'
      });
    });
  }

  ngOnInit() {
  }

}
