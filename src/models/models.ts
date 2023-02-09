import { Document } from 'mongoose';

export interface IBook {
  title: string;
  description: string;
  authors: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

export interface IBookModel extends IBook, Document {}

export interface IUser {
  name: string;
  password: string;
}

// Задание №3
export abstract class BooksRepository {
  createBook(book: IBook): void {
    console.log("Книга создана");
  }

  getBook(id: string): Promise<IBook>{
    return new Promise<IBook>(resolve => resolve({title: "Witcher", description: "Polish fantasy", authors: "Andrzej Sapkowski"}));
  }

  getBooks(): Promise<IBook[]> {
    return new Promise<IBook[]>(resolve => resolve([{title: "Witcher", description: "Polish fantasy", authors: "Andrzej Sapkowski"}, {title: "Star Wars", description: "American fantastic", authors: "George Lucas"}]));
  }

  editBook(id: string): void{
    console.log("Книга обновлена");
  }

  deleteBook(id: string): void{
    console.log("Книга удалена");
  }
}
