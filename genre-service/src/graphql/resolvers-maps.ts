import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { genreResolvers } from './resolvers/genre-resolver';

const resolverMap: any = merge(genreResolvers);
export default resolverMap;
