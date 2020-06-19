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

    const userDetails = new UserDetails(req.headers, req.body.language)
    formData.userDetails = userDetails

    service
      .add(formData)
      .then(async result => {
        const image = new ImageHelper(result.data)
        await image.createFavicons()

        console.log('done')

        // TODO: Delete tmp files
        // TODO: Create social img
        // TODO: Update Mongo data - not sure if necessary
        res.status(result.status).json(result.data)
      })
      .catch(error => {
        console.log(error)
        res.status(error.status).json(error.data)
      })
  }
}

// thanks for using faviconit!
// copy the files to your site and add this code inside the HTML <HEAD> tag:

// <!-- ****** faviconit.com favicons ****** -->
// <link rel="shortcut icon" href="/favicon.ico">,
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">,
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">,
// <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">,
// <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">,
// <meta name="mobile-web-app-capable" content="yes">,
// <meta name="theme-color" content="#fff">,
// <meta name="application-name">,
// <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">,
// <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">,
// <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">,
// <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">,
// <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">,
// <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">,
// <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">,
// <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">,
// <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png">,
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">,
// <link rel="apple-touch-icon" sizes="1024x1024" href="/apple-touch-icon-1024x1024.png">,
// <meta name="apple-mobile-web-app-capable" content="yes">,
// <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">,
// <meta name="apple-mobile-web-app-title">,
// <link rel="icon" type="image/png" sizes="228x228" href="/coast-228x228.png">,
// <meta name="msapplication-TileColor" content="#fff">,
// <meta name="msapplication-TileImage" content="/mstile-144x144.png">,
// <meta name="msapplication-config" content="/browserconfig.xml">,
// <link rel="yandex-tableau-widget" href="/yandex-browser-manifest.json">
// <!-- ****** faviconit.com favicons ****** -->
