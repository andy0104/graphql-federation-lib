import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { bookResolvers } from './resolvers/book-resolver';

const resolverMap: any = merge(bookResolvers);
export default resolverMap;
