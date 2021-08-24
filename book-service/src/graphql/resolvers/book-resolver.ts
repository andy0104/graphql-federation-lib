import { IResolvers } from '@graphql-tools/utils';
import { MutationSaveBookArgs, QueryGetBookArgs } from '../generated';
import Book from '../../models/book';
import bookFactory from '../../services/book-factory';

export const bookResolvers: IResolvers = {
  Query: {
    async getBooks(_: void, args: void): Promise<Book[]|[]> {
      return await bookFactory.getAllBooks();
    },
    async getBook(_: void, args: QueryGetBookArgs): Promise<Book|null> {
      const { id } = args;
      return await bookFactory.getBookById(id);
    }
  },
  Mutation: {
    async saveBook(_: void, args: MutationSaveBookArgs): Promise<any> {
      console.log(args);
      return await bookFactory.saveBooks(args);
    }
  },
  Book: {
    book_genre(book: any) {
      return { __typename: "Genre", genre_id: book.book_genre };
    },
    book_author(book: any) {
      return book.book_author.map((author: any) => ({ __typename: "Author", author_id: author.author_id }));
    }
  },
  Genre: {
    async books(genre) {
      return await bookFactory.getBooksByGenre(genre.genre_id);
    }
  },
  Author: {
    async books(author) {
      return await bookFactory.getBooksByAuthor(author.author_id);
    }
  }
}
