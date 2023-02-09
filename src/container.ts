import {Container} from "inversify";
import {BooksRepository} from "./models/models";

const container = new Container();
container.bind(BooksRepository).toSelf();

export default container;
