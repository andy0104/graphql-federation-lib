import { IResolvers } from '@graphql-tools/utils';
import { MutationSaveAuthorArgs, QueryGetAuthorArgs } from '../generated';
import Author from '../../models/author';
import auhtorFactory from '../../services/author-factory';

export const authorResolvers: IResolvers = {
  Query: {
    async getAuthors(_: void, args: void): Promise<Author[]|[]> {
      return await auhtorFactory.getAllAuthors();
    },
    async getAuthor(_: void, args: QueryGetAuthorArgs): Promise<Author|null> {
      const { id } = args;
      return await auhtorFactory.getAuthorById(id);
    }
  },
  Mutation: {
    async saveAuthor(_: void, args: MutationSaveAuthorArgs): Promise<Author|null> {
      return await auhtorFactory.saveAuthors(args);
    }
  }
}
