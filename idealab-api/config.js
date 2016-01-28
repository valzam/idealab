module.exports = {
  database: process.env.MONGO_URI || 'localhost/idealab',
  databaseTest: 'localhost/test',
  secret: process.env.AUTH_SECRET || 'development',
  APP_URL: process.env.APP_URL || 'http://localhost:3001'
};
