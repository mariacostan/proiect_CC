const express = require('express')
const app = express()
app.use('/', express.static('frontend'))

const Sequelize = require('sequelize')

const sequelize = new Sequelize('my_db', 'maria.costan', '123456789Maria23ase@', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})
app.listen(8080)
