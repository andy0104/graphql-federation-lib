import 'graphql-import-node';
// import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import { gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import * as authorTypeDefs from './schemas/author.graphql';
//import * as emptyTypeDefs from './schemas/empty.graphql';
import resolverMap from './resolvers-maps';

const authorGql = gql`
  ${authorTypeDefs}
`;

// const schema: GraphQLSchema = makeExecutableSchema({
//   typeDefs: [emptyTypeDefs, authorTypeDefs],
//   resolvers: resolverMap
// });

const schema = buildFederatedSchema([{
  typeDefs: authorGql,
  resolvers: resolverMap
}]);

export default schema;

