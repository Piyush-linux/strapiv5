module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      database: "lms",
      user: "strapi_user",
      password: "strongpassword",
      ssl: false,
    },
  },
});
