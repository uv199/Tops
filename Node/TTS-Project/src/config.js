export const config = {
  port: process.env.PORT,
  secret_key: process.env.SECRET_KEY,
  db_url: process.env.DB_URL,
  user: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
};
