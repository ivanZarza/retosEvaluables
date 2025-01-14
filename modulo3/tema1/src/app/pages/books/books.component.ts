import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { CardComponent } from '../../components/card/card.component';
import { ServiceBookService } from '../../shared/books.service';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public arrayBooks: Book[] = [];

  constructor( private serviceBookService: ServiceBookService ) { 

    this.arrayBooks = serviceBookService.getAll();
  }

  libroABorrar(id: number) {
    this.arrayBooks = this.arrayBooks.filter( book => book.id_book !== id );
  }



  ngOnInit() {
  }
}
