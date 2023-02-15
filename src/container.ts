import { Container } from "inversify";
import "reflect-metadata";
import { BooksRepository } from "./models/models";

const container = new Container();
container.bind(BooksRepository).toSelf().inSingletonScope();

export default container;
