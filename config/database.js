import mongoose from 'mongoose'
import { Env } from './env.js'

class Connection {
  constructor () {
    const env = new Env()
    const url = `${env.MONGO_PROTOCOL}://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_URL}`
    const config = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
    mongoose.Promise = global.Promise
    mongoose.connect(url, config)
      .then(() => {
        console.log('Establish new connection with Mongo DB')
      })
      .catch(e => {
        console.log('Error stablishing connection to Mongo DB')
        console.log(e)
      })
  }
}

export default new Connection()
