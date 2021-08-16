import { IResolvers } from '@graphql-tools/utils';
import { MutationSaveBookArgs, QueryGetBookArgs } from '../generated';
import Book from '../../models/book';
// import auhtorFactory from '../../services/book-factory';

export const bookResolvers: IResolvers = {
  Query: {
    async getBooks(_: void, args: void): Promise<[]> {
      return Promise.resolve([]);
    },
    async getBook(_: void, args: QueryGetBookArgs): Promise<null> {
      const { id } = args;
      return Promise.resolve(null);
    }
  },
  Mutation: {
    async saveBook(_: void, args: MutationSaveBookArgs): Promise<any> {
      console.log(args);
      return Promise.resolve({ book_id: "42342424", book_title: "sdfs sfsfs", book_genre: "e22eqweqweq" });
    }
  },
  Book: {
    book_genre(book: any) {
      return { __typename: "Genre", genre_id: book.book_genre };
    },
    book_author(book: any) {
      return book.book_author.map((author: any) => ({ __typename: "Author", author_id: author.author_id }));
    }
  }
}
