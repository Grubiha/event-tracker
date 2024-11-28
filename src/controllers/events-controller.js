const { Op } = require("sequelize")
const ApiError = require("../errors/api-errors")
const { Event } = require("../sequelize/models")

class EventsController {
  async add(req, res, next) {
    try {
      const { stockId, plu, shopId, onShelf, inOrder, action, date } = req.body
      console.log(req.body)
      const event = await Event.create({ stockId, plu, shopId, onShelf, inOrder, action, date })
      res.status(201).json(event)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async get(req, res, next) {
    try {
      const { shopId, plu, dateMin, dateMax, action } = req.query
      const where = {}
      if (shopId) where.shopId = shopId
      if (plu) where.plu = plu
      if (action) where.action = action

      if (dateMin || dateMax) {
        where.date = {}
        if (dateMin) where.date[Op.gte] = new Date(dateMin)
        if (dateMax) where.date[Op.lte] = new Date(dateMax)
      }

      const events = await Event.findAll({ where })
      res.status(200).json(events)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new EventsController()
