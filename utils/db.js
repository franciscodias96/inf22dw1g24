'use strict'

const mysql = require('mysql')

const connection = mysql.createConnection({
	host: `localhost`,
	user: `root`,
	password: ``,
	database: `netflix`
})

connection.connect((error) => {
	if (error) {
		console.error('Error on database connection')
		throw error
	}
	console.log('Database connection active...')
})

module.exports = connection
