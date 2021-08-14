import { IResolvers } from '@graphql-tools/utils';
import { MutationSaveAuthorArgs, QueryGetAuthorArgs } from '../generated';
import Author from '../../models/author';
import auhtorFactory from '../../services/author-factory';

export const authorResolvers: IResolvers = {
  Query: {
    async getAuthors(_: void, args: void): Promise<Author[]|[]> {
      return auhtorFactory.getAllAuthors();
    },
    async getAuthor(_: void, args: QueryGetAuthorArgs): Promise<Author|{}> {
      return Promise.resolve({id: '1331', name: 'Aninda'});
    }
  },
  Mutation: {
    async saveAuthor(_: void, args: MutationSaveAuthorArgs): Promise<Author|{}> {
      return Promise.resolve({ ...args });
    }
  }
}
