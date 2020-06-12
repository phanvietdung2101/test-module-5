import { IBook } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: IBook
  constructor(private bookService: BookService,private route: ActivatedRoute,private router: Router) { }

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
        this.router.navigate(['/'])
      })
  }  

}
