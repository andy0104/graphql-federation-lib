import 'graphql-import-node';
import * as authorTypeDefs from './schemas/book.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import resolverMap from './resolvers-maps';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, authorTypeDefs],
  resolvers: resolverMap
});

export default schema;

