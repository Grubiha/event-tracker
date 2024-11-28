const ApiError = require("../errors/api-errors")

module.exports = (err, req, res, next) => {
  console.log(err)
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).json({ message: "internal server error" })
}
