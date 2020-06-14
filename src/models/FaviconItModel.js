/* eslint-disable no-useless-escape */
import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema

export class FaviconItModel {
  /**
   * Get the DB model intance
   */
  constructor () {
    const schema = new Schema(
      {
        faviconFile: {
          type: Object,
          required: true,
          validate: {
            validator: (v) => {
              const minImageSize = Number(process.env.REACT_APP_IMAGE_MIN_IMAGE_SIZE)
              const width = v.width
              const height = v.height
              if (width < minImageSize || height < minImageSize) {
                return false
              } else if (width !== height) {
                return false
              }
              return true
            },
            message: 'invalid size'
          }
        },
        faviconName: {
          type: String,
          required: false,
          validate: {
            validator: (v) => {
              return /^[a-zA-Z0-9\.\-\_]*$/g.test(v)
            },
            message: 'invalid format'
          }
        },
        faviconVersion: {
          type: String,
          required: false,
          validate: {
            validator: (v) => {
              return /^[a-zA-Z0-9\.\-\_]*$/g.test(v)
            },
            message: 'invalid format'
          }
        },
        faviconFolder: {
          type: String,
          required: false,
          validate: {
            validator: (v) => {
              return /^[a-zA-Z0-9\/\:\.\-\_]*$/g.test(v)
            },
            message: 'invalid format'
          }
        },
        userDetails: {
          type: Object,
          required: false
        }
      },
      {
        timestamps: true,
        collection: 'Favicons'
      }
    )

    schema.plugin(uniqueValidator)
    return mongoose.model('Favicon', schema)
  }
}
