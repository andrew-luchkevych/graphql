export = {
    type: "postgres",
    host: "127.0.0.1",
    port: "5432",
    username: "graphql",
    password: "fylhsq",
    database: "graphql",
    synchronize: true,
    logging: true,
    cache: false,
    entities: [
        "src/entities/**/entity.ts",
    ],
    migrations: [
        "src/migration/**/*.ts",
    ],
    subscribers: [
        "src/subscriber/**/*.ts",
    ],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
};
