import fs from 'fs'
import autoBind from 'auto-bind'
import sharp from 'sharp'

export class ImageHelper {
  constructor (file) {
    autoBind(this)
    this.file = file
  }

  async createFavicons () {

  }
}
