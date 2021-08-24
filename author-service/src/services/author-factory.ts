import Author from '../models/author';
import { MutationSaveAuthorArgs } from '../graphql/generated';

class AuthorFactory {
  public async getAllAuthors(): Promise<Author[]> {
    try {
      return await Author.findAll({});
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async getAuthorById(authorId: string): Promise<Author|null> {
    try {
      return await Author.findOne({
        where: {
          author_id: authorId
        }
      });
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async saveAuthors(params: MutationSaveAuthorArgs): Promise<Author|null> {
    try {
      const { id, name, email, phone } = params;
      let author: Author|null;

      if (id !== '') {
        // Update the author
        author = await Author.findOne({
          where: {
            author_id: id
          }
        });

        if (!author) return null;

        author.author_name = name||'';
        author.author_email = email||'';
        author.author_phone = phone||'';
        author.save();
      } else {
        // Add a new author
        author = await Author.build({
          author_name: name,
          author_email: email,
          author_phone: phone
        });
        author.save();
      }
      return author;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export default new AuthorFactory();