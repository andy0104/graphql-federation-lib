import Book from '../models/book';
import BookAuthor from "../models/book-author";
import { MutationSaveBookArgs } from '../graphql/generated';

class BookFactory {
  public async getAllBooks(): Promise<Book[]> {
    try {
      return await Book.findAll({
        include: {
          model: BookAuthor,
          as: 'book_author'
        }
      });
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async getBookById(bookId: string): Promise<Book|null> {
    try {
      return await Book.findOne({
        where: {
          book_id: bookId
        },
        include: {
          model: BookAuthor,
          as: 'book_author'
        }
      });
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async saveBooks(params: MutationSaveBookArgs): Promise<Book|null> {
    try {
      const { id, title, genre, author } = params;
      let book: Book|null;

      if (id !== '') {
        // Update the book
        book = await Book.findOne({
          where: {
            book_id: id
          }
        });

        if (!book) return null;

        book.book_title = title||'';
        book.book_genre = genre||'';
        await book.save();
      } else {
        // Add a new book
        book = await Book.build({
          book_title: title,
          book_genre: genre
        });
        await book.save();
      }
      return book;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export default new BookFactory();