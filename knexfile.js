// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection:  'postgres://localhost/exampledb',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
