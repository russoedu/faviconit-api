import { FaviconItService } from '../services/index.js'
import { FaviconFile } from '../models/FaviconFile.js'

const service = new FaviconItService()

export class DownloadController {
  static get (req, res) {
    const _id = req.params.id
    // TODO: Retrieve favicons
    service
      .get({ _id })
      .then(result => {
        res.status(result.status).json(result.data[0])
      })
      .catch(error => {
        console.log(error)
        res.status(error.status).json(error.data)
      })
  }
}
