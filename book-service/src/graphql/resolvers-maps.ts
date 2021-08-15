import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { authorResolvers } from './resolvers/book-resolver';

const resolverMap: IResolvers = merge(authorResolvers);
export default resolverMap;
