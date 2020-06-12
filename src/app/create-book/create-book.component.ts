import { IBook } from './../model/book';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  bookForm : FormGroup
  constructor(private bookService: BookService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['',[Validators.required]],
      author: ['',[Validators.required]],
      description: ['',[Validators.required]],
    })
  }

  onSubmit(){
    if(this.bookForm.valid){
      console.log(this.bookForm)
      const book = this.bookForm.value;
      this.bookService.createBook(book).subscribe(
        data => {
          this.bookForm.reset;
          this.router.navigate(['/'])
        },
        err => {
          alert(err)
        }
      )
    }
  }

}
