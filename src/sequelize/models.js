const { DataTypes } = require("sequelize")
const sequelize = require("./data-source")

const Event = sequelize.define(
  "event",
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },

    stockId: { type: DataTypes.UUID, allowNull: false },
    plu: { type: DataTypes.STRING, allowNull: false },
    shopId: { type: DataTypes.STRING, allowNull: false },
    onShelf: { type: DataTypes.INTEGER, allowNull: false },
    inOrder: { type: DataTypes.INTEGER, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
  },
  { timestamps: false }
)

module.exports = { Event }
