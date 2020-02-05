import { createConnection, Connection } from "typeorm";

let connection: Connection;

export const connectToDB = () => createConnection()
    .then((c) => {
        connection = c;
        return connection;
    }).catch(e => {
        console.error(e);
        process.exit();
    });
export default connection;