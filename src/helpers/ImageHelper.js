import fs from 'fs'
import path from 'path'
import autoBind from 'auto-bind'
import sharp from 'sharp'
import toIco from 'to-ico'
import { Favicons } from '../../config/favicons.js'

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
    // console.log(dbData);

    this.favicons = new Favicons(dbData.appName, dbData.faviconFolder)
  }

  async createFavicons () {
    console.log('create favicons')

    const newPath = path.join('./favicon-tmp/', this.data._id.toString())
    const original = path.join(newPath, 'original.' + this.data.faviconFile.extension)

    fs.mkdirSync(newPath)
    fs.renameSync(this.data.faviconFile.tempFilePath, original)

    console.log(newPath, 'created')

    const favicons = new Favicons(this.data.appName, this.data.faviconFolder)

    for (const elementPlatform in favicons.icons) {
      const icons = favicons.icons[elementPlatform]
      for (const elementIcon in icons) {
        const size = icons[elementIcon]
        console.log(size)
        if (size !== 'ico') {
          await sharp(original)
            .resize({ width: size })
            .toFile('./favicon-tmp/' + this.data._id + '/' + elementIcon)
        } else {
          this._createIco()
        }
      }
    }
    return true

  }

  async _createIco () {
    const files = [
      fs.readFileSync('./favicon-tmp/' + this.data._id + '/favicon-16x16.png'),
      fs.readFileSync('./favicon-tmp/' + this.data._id + '/favicon-24x24.png'),
      fs.readFileSync('./favicon-tmp/' + this.data._id + '/favicon-32x32.png'),
      fs.readFileSync('./favicon-tmp/' + this.data._id + '/favicon-48x48.png'),
      fs.readFileSync('./favicon-tmp/' + this.data._id + '/favicon-64x64.png')
    ]
    toIco(files).then(buf => {
      fs.writeFileSync('./favicon-tmp/' + this.data._id + '/favicon.ico', buf)
    })
  }
}
