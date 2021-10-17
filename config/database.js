module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: '127.0.0.1',
        port: '3306',
        database: env('DB_NAME'),
        username: env('DB_USER'),
        password: env('DB_USER_PASSWORD')
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
