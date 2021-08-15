import Genre from '../models/genre';
import { MutationSaveGenreArgs } from '../graphql/generated';

class GenreFactory {
  public async getAllGenres(): Promise<Genre[]> {
    try {
      return await Genre.findAll({});
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async getGenreById(genreId: string): Promise<Genre|null> {
    try {
      return await Genre.findOne({
        where: {
          genre_id: genreId
        }
      });
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async saveGenres(params: MutationSaveGenreArgs): Promise<Genre|null> {
    try {
      const { id, name } = params;
      let genre: Genre|null;

      if (id !== '') {
        // Update the genre
        genre = await Genre.findOne({
          where: {
            genre_id: id
          }
        });

        if (!genre) return null;

        genre.genre_name = name||'';
        genre.save();
      } else {
        // Add a new genre
        genre = await Genre.build({
          genre_name: name
        });
        genre.save();
      }
      return genre;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export default new GenreFactory();