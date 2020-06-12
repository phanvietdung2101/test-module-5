import { IBook } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: IBook
  router: Router
  constructor(private bookService: BookService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id:number;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    })
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

  onClick(){
    this.bookService.deleteBook(this.book.id).subscribe(data => 
      {
        this.router.navigateByUrl("localhost:4200")
      })
  }  

}
