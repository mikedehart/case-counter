const Sybase = require('../../conf/db.dev.js');

module.exports = () => {
	const { STRING, INTEGER, DATE, DECIMAL } = Sybase;

	return Sybase.define('EIM', {
		WP: {
			type: STRING,
			allowNull: true
		},
		IncidentNumber: {
			type: STRING,
			allowNull: true
		},
		IncidentYear: {
			type: STRING,
			allowNull: true
		},
		Description: {
			type: STRING,
			allowNull: true
		},
		Component: {
			type: STRING,
			allowNull: true
		},
		Status: {
			type: STRING,
			allowNull: true
		},
		ProcessingOrg: {
			type: STRING,
			allowNull: true
		},
		Processor: {
			type: STRING,
			allowNull: true
		},
		Priority: {
			type: STRING,
			allowNull: true
		},
		Customer: {
			type: STRING,
			allowNull: true
		},
		CustomerERPNumber: {
			type: STRING,
			allowNull: true
		},
		CustomerCountry: {
			type: STRING,
			allowNull: false
		},
		Language: {
			type: STRING,
			allowNull: true
		},
		CreationDate: {
			type: STRING,
			allowNull: true
		},
		IncidentID_Customer_: {
			type: STRING,
			allowNull: true
		},
		ServiceTeam: {
			type: STRING,
			allowNull: true
		},
		Reporter: {
			type: STRING,
			allowNull: true
		}
	}, {
		tableName: 'EIMIncidents',
		//rtrim: true
	})
}