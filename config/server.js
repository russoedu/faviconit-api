import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import autoBind from 'auto-bind'
import fileUpload from 'express-fileupload'
import cors from 'cors'

import routes from './routes.js'
import { Env } from './env.js'

const env = new Env()

const server = express()

class AppController {
  constructor () {
    this.port = env.FAVICONIT_PORT
    this.logPath = path.join(path.resolve(), `../logs/api-${env.FAVICONIT_ENVIRONMENT}-access.log`)
    autoBind(this)

    this.config()
    this.secure()
    this.setRoutes()
  }

  config () {
    const accessLogStream = fs.createWriteStream(this.logPath, { flags: 'a' })

    server.use(morgan('combined', { stream: accessLogStream }))
    server.use(express.json())
    server.use('/public', express.static('public'))
    server.use(compression())
    // TODO: test file limit response on Client
    // TODO: test multiple upload limit response on Client
    server.use(fileUpload({
      limits: {
        fileSize: Number(env.IMAGE_MAX_MB_SIZE) * 1024 * 1024,
        files: 1
      },
      useTempFiles: true,
      safeFileNames: true,
      preserveExtension: true,
      uriDecodeFileNames: true,
      responseOnLimit: { error: 'maxSizeExceeded' },
      abortOnLimit: true,
      tempFileDir: './favicon-tmp/',
      debug: env.FAVICONIT_ENVIRONMENT === 'development'
    }))
  }

  secure () {
    server.use(helmet())
    const corsOptions = {
      origin: env.FAVICONIT_CLIENT_URL,
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    server.use(cors(corsOptions))
  }

  setRoutes () {
    const options = {
      create: []
    }
    routes(server, options)
  }

  start () {
    server.listen(this.port, () => {
      console.log('API running, listening externally on:', this.port)
      console.log('API logs streaming on:', this.logPath)
    })
  }
}

export default AppController
