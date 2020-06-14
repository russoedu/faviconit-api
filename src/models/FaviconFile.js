import fs from 'fs'
import autoBind from 'auto-bind'
import sharp from 'sharp'

/**
 * Favicon File class
 */
export class FaviconFile {
  /**
   * Create a file object that will be stored n the DB. Doesn't include the file
   * @param {object} file The file object sent by the client form
   */
  constructor (file) {
    autoBind(this)

    this.originalName = file.name
    this.size = file.size
    this.encoding = file.encoding
    this.mimetype = file.mimetype
    this.md5 = file.md5
    this.tempFilePath = file.tempFilePath
  }

  /**
   * Format the file objects. It is an async method because it needs to wait for Sharp to get the file width and height
   */
  async format () {
    this._setExtension()
    this._rename()
    await this._setDimensions()
    this._setFileName()

    return true
  }

  /**
   * Set the file dimensions (width and height)
   * @private
   */
  async _setDimensions () {
    await sharp(this.tempFilePath)
      .metadata()
      .then(metadata => {
        this.width = metadata.width
        this.height = metadata.height
        return true
      })
  }

  /**
   * Rename the file adding the correct extension
   * @private
   */
  _rename () {
    const newPath = this.tempFilePath + '.' + this.extension

    fs.renameSync(this.tempFilePath, newPath)

    this.tempFilePath = newPath
  }

  /**
   * Get the file name without the path
   * @returns {string} The file name without the path
   * @private
   */
  _setFileName () {
    const splitted = this.tempFilePath.split('/')
    this.name = splitted[splitted.length - 1]
  }

  /**
   * Get the file extension based on the mime type
   * @private
   */
  _setExtension () {
    switch (this.mimetype) {
      case 'image/bmp':
      case 'image/x-xbitmap':
        this.extension = 'bmp'
        break

      case 'image/gif':
        this.extension = 'gif'
        break

      case 'image/jpg':
      case 'image/jpeg':
        this.extension = 'jpg'
        break

      case 'image/png':
        this.extension = 'png'
        break

      case 'image/svg+xml':
        this.extension = 'svg'
        break

      case 'image/webp':
        this.extension = 'webp'
        break

      // TODO: error if extension not identified
      default:
        this.extension = false
        break
    }
  }
}
