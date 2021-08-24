import Author from '../models/author';
import { MutationSaveAuthorArgs } from '../graphql/generated';
import { CacheHelper } from '../helpers/cache-helper';

class AuthorFactory {
  public async getAllAuthors(): Promise<Author[]> {
    try {
      if (CacheHelper.get('author-list')) {
        console.log(`Cache hit`);
        return await CacheHelper.get('customer-list');
      }
      console.log(`Cache miss`);
      // Add the data in cache
      const allAuthors = await Author.findAll({})
      CacheHelper.add('author-list', allAuthors);
      return allAuthors;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async getAuthorById(authorId: string): Promise<Author|null> {
    try {
      if (CacheHelper.get(`author-detail-${authorId}`)) {
        console.log(`Cache hit`);
        return await CacheHelper.get(`author-detail-${authorId}`);
      }
      console.log(`Cache miss`);
      // Add the data in cache
      const authorDetail = await Author.findOne({
        where: {
          author_id: authorId
        }
      });
      CacheHelper.add(`author-detail-${authorId}`, authorDetail);
      return authorDetail;
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
        await author.save();
      } else {
        // Add a new author
        author = await Author.build({
          author_name: name,
          author_email: email,
          author_phone: phone
        });
        await author.save();
      }
      return author;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export default new AuthorFactory();