import Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import { GraphQLSchema } from "graphql";
import {Connection} from "typeorm";

export let apollo: ApolloServer;

export const startApolloServer = (schema: GraphQLSchema, app: Koa, connection: Connection) => {
    apollo = new ApolloServer({
        schema,
        context: (ctx) => {
            ctx.conn = connection;
            // console.log(ctx);
            return ctx;
        },
        // tracing: true,
    });
    apollo.applyMiddleware({ app });
    return apollo;
}

export default apollo;