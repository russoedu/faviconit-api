import uaParser from 'ua-parser-js'
/**
 * User Details class
 */
export class UserDetails {
  /**
   * Create a user details object that will be stored n the DB.
   * @param {object} header The request header object sent by the client
   */
  constructor (header, language) {
    const ua = uaParser(header['user-agent'])

    this.language = language
    this.languages = header['accept-language'].split(';')
    this.referer = header.referer

    this.userAgent = header['user-agent']
    this.browser = {
      name: ua.browser.name,
      version: ua.browser.version
    }
    this.os = {
      name: ua.os.name,
      version: ua.os.version
    }
  }
}
