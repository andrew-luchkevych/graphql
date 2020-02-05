# graphql

1. Install Postgres
    `brew install postgresql`;
2. Start Postgres
    `pg_ctl -D /usr/local/var/postgres start && brew services start postgresql`
3. Create user and db, user should has SUPERUSER privileges (required for uuid_generate_v4()), set connection params in ormconfig.ts
4. Install node_modules
    `yarn` or `npm install`
5. Run migrations
    `yarn typeorm migration:run` or `npm run typeorm migration:run`
6. Start server
    `yarn start` or `npm start`
7. By default, server addres is: `localhost:4000`.
8. To test graphql you can use GraphiQL, that can be accessed on `/graphql`
9. Right now there is implemented queries and mutations for Page, Post, User Entities
