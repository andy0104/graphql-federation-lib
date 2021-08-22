import { IResolvers } from '@graphql-tools/utils';
import { MutationSaveGenreArgs, QueryGetGenreArgs } from '../generated';
import Genre from '../../models/genre';
import GenreFactory from '../../services/genre-factory';

export const genreResolvers: IResolvers = {
  Genre: {
    __resolveReference: async (ref) => {
      return await GenreFactory.getGenreById(ref.genre_id);
    }
  },
  Query: {
    async getGenres(_: void, args: void): Promise<Genre[]> {
      return await GenreFactory.getAllGenres();
    },
    async getGenre(_: void, args: QueryGetGenreArgs): Promise<Genre|null> {
      return await GenreFactory.getGenreById(args.id);
    }
  },
  Mutation: {
    async saveGenre(_: void, args: MutationSaveGenreArgs): Promise<Genre|null> {
      return await GenreFactory.saveGenres(args);
    }
  }
}
