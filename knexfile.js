// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',

    connection: {
      filename: './data/car-dealer.db3' // this is where you want to look for the SQL database.
    },

    useNullAsDefault: true, //  you have to set this so that if there are no constaints on the colomn then knex knows how to approch those issues

    migrations: {
      directory: './data/migrations' // we can create this file even before we make this and in the CLI we can then instatsiate this folder-directory as well as the seeds file
    },

    seeds: {
      directory: './data/seeds'
    }
  }

};

