import fs from 'fs'
import path from 'path'
import autoBind from 'auto-bind'
import { Favicons } from '../../config/favicons.js'
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
    console.log(dbData);

    this.favicons = new Favicons(dbData.appName, dbData.faviconFolder)
  }

  async createFavicons () {
    console.log(this.data)
    const newPath = path.join('./favicon-tmp/', this.data._id.toString())
    fs.mkdirSync(newPath)
    const original = path.join(newPath, 'original.' + this.data.faviconFile.extension)
    fs.renameSync(this.data.faviconFile.tempFilePath, original)

    // favicons.sizes.forEach(async size => {
    //   console.log(size)
    //   await sharp(original)
    //     .resize({ width: size })
    //     .toFile('./favicon-tmp/' + this.data._id + '/favicon-' + size + '.png')
    // })

  }
}
