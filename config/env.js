import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

let instance = null

export class Env {
  constructor () {
    if (!instance) {
      const regEx = /^([A-Z_]+)/gm
      const envVars = fs.readFileSync('.env', 'utf8').match(regEx)

      envVars.forEach(v => {
        this[v] = process.env[v]
      })
      instance = this
    }
    return instance
  }
}
