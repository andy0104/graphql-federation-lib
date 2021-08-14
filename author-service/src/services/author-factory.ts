import Author from '../models/author';

class AuthorFactory {
  public async getAllAuthors(): Promise<Author[]> {
    try {
      return await Author.findAll({});
    } catch (error) {
      console.error(error);
      return Promise.reject(undefined);
    }
  }
}

export default new AuthorFactory();