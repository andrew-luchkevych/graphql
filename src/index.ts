import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import {connectToDB} from "./db";
import {initSchema} from "./schema";
import {startApolloServer} from "./apollo";

dotenv.config();

const normalizePort = (port: string) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || "3000");

function exitHandler(options: any, err: any) {
    if (options.cleanup) {
        process.stdout.write("clean");
    }
    if (err) {
        process.stdout.write(err.stack);
    }
    if (options.exit) {
        process.exit();
    }
}

// do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

// catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

connectToDB().then(connection => {
    initSchema().then(schema => {
        const graphqlPath = startApolloServer(schema, app, connection).graphqlPath;
        const listener = app.listen(PORT);
        const address = listener.address();
        const addr = typeof address === "string" ? address : `${address.address}:${address.port}`;
        console.log(`GraphQL listens on ${addr}/${graphqlPath}`);
    })
});