import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { authorResolvers } from './resolvers/author-resolver';

const resolverMap: any = merge(authorResolvers);
export default resolverMap;
