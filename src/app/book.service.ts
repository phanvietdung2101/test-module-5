import { IBook } from './model/book';
import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: IBook[] = [];
  
  constructor(private http: HttpClient) { }

  getAllBook(): Observable<IBook[]>{
    return this.http.get<IBook[]>(' http://localhost:3000/books'); 
  }
  
  getBookById(id: number): Observable<IBook>{
    return this.http.get<IBook>('http://localhost:3000/books/' + id);
  }

  createBook(book: IBook) {
    return this.http.post('http://localhost:3000/books',book)
  }

  deleteBook(id: number) {
    return this.http.delete('http://localhost:3000/books/' + id);
  }
}
