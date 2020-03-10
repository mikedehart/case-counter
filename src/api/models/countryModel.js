const Sybase = require('../../conf/db.dev.js');

module.exports = () => {
	const { STRING, INTEGER, DATE, DECIMAL } = Sybase;

	return Sybase.define('Country', {
		Country: {
			type: STRING,
			primaryKey: true,
			allowNull: false
		},
		Name: {
			type: STRING,
			allowNull: false
		}
	}, {
		tableName: 'Countries',
		rtrim: true
	})
}