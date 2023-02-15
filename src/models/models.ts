import { Types } from "mongoose";
import Book from "./book";
import { injectable } from "inversify";

export interface IBook {
  title: string;
  description: string;
  authors: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

export type BookModel = IBook & { _id: Types.ObjectId };

export interface IUser {
  name: string;
  password: string;
}

// Задание №3
export interface IBookRepository {
  createBook(book: IBook): Promise<void>;

  getBook(id: string): Promise<BookModel>;

  getBooks(): Promise<BookModel[]>;

  editBook(id: string, book: IBook): Promise<void>;

  deleteBook(id: string): Promise<void>;
}

@injectable()
export class BooksRepository implements IBookRepository {
  async createBook(book: IBook) {
    const newBook = new Book({
      title: book.title,
      description: book.description,
      authors: book.authors,
    });
    await newBook.save();
  }

  async getBook(id: string) {
    return Book.findById(id).select("-__v");
  }

  async getBooks() {
    return Book.find().select("-__v");
  }

  async editBook(id: string, book: IBook) {
    await Book.findByIdAndUpdate(id, {
      title: book.title,
      description: book.description,
      authors: book.authors,
    });
  }

  async deleteBook(id: string) {
    await Book.deleteOne({ _id: id });
  }
}
