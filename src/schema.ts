import { buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql";

export let schema: GraphQLSchema;

export const initSchema = () => buildSchema({
    resolvers: [__dirname + "/entities/**/resolver.ts"],
    emitSchemaFile: {
        path: __dirname + "/../schema.graphql",
        commentDescriptions: true,
    },
    validate: false,
}).then(s => {
    schema = s;
    return schema;
}).catch(e => {
    console.error(e);
    process.exit();
});

export default schema;