import { CreateController, DownloadController } from '../src/controllers/index.js'

/**
 * Routes class
 */
class Routes {
  /**
   * Set the server routes
   * @param {Express} server The express server
   * @param {Object} options The option for each route
   */
  static setRoutes (server, options) {
    server.post('/create/', options.create, CreateController.create)
    server.post('/download/:id', options.create, DownloadController.get)
  }
}

export default Routes.setRoutes
