import fs from 'fs'
import autoBind from 'auto-bind'
import { favicons } from '../../config/favicons.js'
import sharp from 'sharp'

/**
 * Image manipulation class
 */
export class ImageHelper {
  /**
   * Set the DB data that will be used to move and manipulate the images
   * @param {Object} dbData The response data from the DB inserted details
   */
  constructor (dbData) {
    autoBind(this)
    this.data = dbData
  }

  async createFavicons () {
    console.log(this.data)

    fs.mkdirSync('./favicon-tmp/' + this.data._id)
    const original = './favicon-tmp/' + this.data._id + '/original.' + this.data.faviconFile.extension
    fs.renameSync(this.data.faviconFile.tempFilePath, original)

    favicons.sizes.forEach(async size => {
      console.log(size)
      await sharp(original)
        .resize({ width: size })
        .toFile('./favicon-tmp/' + this.data._id + '/favicon-' + size + '.png')
    })

  }
}
