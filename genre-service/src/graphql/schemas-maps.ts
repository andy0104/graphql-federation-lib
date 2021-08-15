import 'graphql-import-node';
import { gql } from 'apollo-server-express';
import { merge } from 'lodash';
import { buildFederatedSchema } from '@apollo/federation';
// import { makeExecutableSchema } from '@graphql-tools/schema';
// import { GraphQLSchema } from 'graphql';
import * as genreTypeDefs from './schemas/genre.graphql';
// import * as emptyTypeDefs from './schemas/empty.graphql';
import resolverMap from './resolvers-maps';

const gqlSchemas = gql`
    ${genreTypeDefs}
`;

// const schema: GraphQLSchema = makeExecutableSchema({
//   typeDefs: [emptyTypeDefs, genreTypeDefs],
//   resolvers: resolverMap
// });

const schema = buildFederatedSchema([{
  typeDefs: gqlSchemas,
  resolvers: resolverMap,
}]);

export default schema;

