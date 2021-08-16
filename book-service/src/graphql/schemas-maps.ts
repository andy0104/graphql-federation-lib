import 'graphql-import-node';
import { gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import * as bookTypeDefs from './schemas/book.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
// import { makeExecutableSchema } from '@graphql-tools/schema';
// import { GraphQLSchema } from 'graphql';
import resolverMap from './resolvers-maps';

const bookGql = gql`
  ${bookTypeDefs}
`;

// const schema: GraphQLSchema = makeExecutableSchema({
//   typeDefs: [emptyTypeDefs, authorTypeDefs],
//   resolvers: resolverMap
// });

const schema = buildFederatedSchema([{
  typeDefs: bookGql,
  resolvers: resolverMap
}]);

export default schema;

