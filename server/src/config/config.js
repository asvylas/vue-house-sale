module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'basicapp2',
    user: process.env.DB_USER || 'basicapp2',
    password: process.env.DB_PASS || 'basicapp2',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './dbstorage.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  authExternalApi: {
    google: null,
    github: null
  }
}
