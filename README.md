# graphql

1. Install Postgres
    `brew install postgresql`;
2. Start Postgres
    `pg_ctl -D /usr/local/var/postgres start && brew services start postgresql`
3. Create user and db, set connection params in ormconfig.ts