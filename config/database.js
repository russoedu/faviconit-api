import mongoose from 'mongoose'

class Connection {
  constructor () {
    const url = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`
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
