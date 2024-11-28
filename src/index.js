const express = require("express")

const errorMiddleware = require("./middlewares/error-middleware")
const eventsController = require("./controllers/events-controller")
const sequelize = require("./sequelize/data-source")

const router = express.Router()
router.post("/", eventsController.add)
router.get("/", eventsController.get)

const app = express()
app.use(express.json())
app.use("/events", router)
app.use(errorMiddleware)

const PORT = process.env.PORT
console.log(PORT)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
