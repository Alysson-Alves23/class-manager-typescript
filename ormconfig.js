const dotenv = require('dotenv');

dotenv.config({
    path: process.env.NODE_ENV==='dev' ? '.env.dev':'test'?'.env.test':'.env.prod'
})

module.exports = {
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "",
   "database": process.env.TYPEORM_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      process.env.TYPEORM_ENTITIES
   ],
   "migrations": [
      process.env.TYPEORM_MIGRATIONS
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": process.env.TYPEORM_ENTITIES_DIR,
      "migrationsDir": process.env.TYPEORM_ENTITIES_DIR,
      "subscribersDir":  process.env.TYPEORM_MIGRATIONS_DIR
   }
}