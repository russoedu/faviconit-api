import mongoose from 'mongoose'
import autoBind from 'auto-bind'

import { FaviconItModel } from '../models/FaviconItModel.js'

const model = new FaviconItModel()

export class FaviconItService {
  constructor () {
    autoBind(this)
  }

  async add (data) {
    try {
      const item = await model.create(data)
      if (item) {
        return {
          status: 201,
          data: item
        }
      }
    } catch (errors) {
      const errorsResponse = {
        status: 400,
        data: {}
      }
      if (errors.errors.faviconFile) {
        errorsResponse.data.faviconFile = errors.errors.faviconFile.properties.message
      }
      if (errors.errors.faviconName) {
        errorsResponse.data.faviconName = errors.errors.faviconName.properties.message
      }
      if (errors.errors.faviconVersion) {
        errorsResponse.data.faviconVersion = errors.errors.faviconVersion.properties.message
      }
      if (errors.errors.faviconFolder) {
        errorsResponse.data.faviconFolder = errors.errors.faviconFolder.properties.message
      }
      throw errorsResponse
    }
  }

  async get (query = {}) {
    let { skip, limit } = query

    skip = skip ? Number(skip) : 0
    limit = limit ? Number(limit) : 10

    delete query.skip
    delete query.limit

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id)
      } catch (errors) {
        const error = {
          status: 500,
          data: errors
        }
        throw error
      }
    }

    try {
      const items = await this.model
        .find(query)
        .skip(skip)
        .limit(limit)
      const total = await this.model.countDocuments()

      return {
        status: 200,
        data: items,
        total
      }
    } catch (errors) {
      const error = {
        status: 500,
        data: errors
      }
      throw error
    }
  }
}
