const Sequelize = require('sequelize')
const db = require('./db')

const Unicorn = db.define("unicorns", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Unicorn