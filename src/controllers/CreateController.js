import { FaviconItService } from '../services/index.js'
import { FaviconFile, UserDetails } from '../models/index.js'
import { ImageHelper } from '../helpers/index.js'

const service = new FaviconItService()

export class CreateController {
  static async create (req, res) {
    console.log('create')

    const formData = req.body
    const faviconFile = new FaviconFile(req.files.faviconFile)
    await faviconFile.format()
    formData.faviconFile = faviconFile

    const userDetails = new UserDetails(req.headers)
    formData.userDetails = userDetails

    service
      .add(formData)
      .then(async result => {
        const image = new ImageHelper(result.data)
        await image.createFavicons()

        // TODO: Create favicons!!! Get all possible formats Sharp :)
        // Save files in folders and subfolders
        // Delete tmp files
        // Create social img
        // TODO: Update Mongo data - not sure if necessary
        res.status(result.status).json(result.data)
      })
      .catch(error => {
        console.log(error)
        res.status(error.status).json(error.data)
      })
  }
}
