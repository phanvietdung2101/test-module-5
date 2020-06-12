import { IBook } from './../model/book';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public bookList: IBook[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      data => this.bookList = data
    )
  }

  

}
