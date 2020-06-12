import { IBook } from './../model/book';
import { BookService } from './../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup
  book: IBook
  constructor(private bookService: BookService, private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number
    this.route.paramMap.subscribe(params => {
     id = Number(params.get('id'));
    });

    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })

    this.bookService.getBookById(id).subscribe(
      data => {
        this.book = data;
        this.bookForm.patchValue(data)
      }
    )

    
  }



  onSubmit(){
    if(this.bookForm.valid){
      console.log(this.bookForm)
      const book = this.bookForm.value;
      this.bookService.editBook(this.book.id,book).subscribe(
        data => {
          this.bookForm.reset('');
        },
        err => {
          alert(err)
        }
      )
    }
  }

}
