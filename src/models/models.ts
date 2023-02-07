export interface IBook {
  _id?: string;
  title: string;
  description: string;
  authors: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

export interface IUser {
  name: string;
  password: string;
}


// Задание №3
abstract class BooksRepository {
  createBook(book: IBook): void {
    console.log("Книга создана");
  }

  getBook(id: string): IBook{
    return {title: "Witcher", description: "Polish fantasy", authors: "Andrzej Sapkowski"}
  }

  getBooks():IBook[] {
    return [{title: "Witcher", description: "Polish fantasy", authors: "Andrzej Sapkowski"}, {title: "Star Wars", description: "American fantastic", authors: "George Lucas"}]
  }

  updateBook(id: string): void{
    console.log("Книга обновлена");
  }

  deleteBook(id: string): void{
    console.log("Книга удалена");
  }
}
