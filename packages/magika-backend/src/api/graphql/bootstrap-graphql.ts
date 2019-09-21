import { Express } from "express";
import ExpressGraphQL from "express-graphql";
import { buildSchema } from 'graphql';

let msg = 'Hello stranger...';

const rootResolver = {
  hello: () => msg,
  setMsg: (params, req, parent) => {
    msg = `Hello ${params.name}`;
    return "OK";
  }
};

const rootSchema = buildSchema(`
  type Query {
    hello: String
  },
  type Mutation {
    setMsg(name: String): String
  }
`);

export function bootstrapGraphQL(app: Express) {
  const baseUrl = '/api/graphql';

  app.use(baseUrl, ExpressGraphQL({
    graphiql: true,
    rootValue: rootResolver,
    schema: rootSchema
  }))
}
