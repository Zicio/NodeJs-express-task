export interface IBook {
  id?: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName?: string;
  fileBook?: string;
}

export interface IUser {
  name: string;
  password: string;
}
