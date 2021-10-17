module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1343),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ffc6fd087b4c860dfad6b8064a256e1f'),
    },
  },
});
