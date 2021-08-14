import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { authorResolvers } from './resolvers/author-resolver';

const resolverMap: IResolvers = merge(authorResolvers);
export default resolverMap;
