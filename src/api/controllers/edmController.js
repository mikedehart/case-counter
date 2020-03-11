const Sybase = require('../../conf/db.dev.js');


exports.get = function(req, res, next) {
	Sybase.models.EDM.by(Sybase.DBPools.development);

	// let x = Sybase.models.EDM.findAll({ Priority: "Very high" }).then((data) => {
	// 	res.json(data);
	// })
	// .catch((err) => {
	// 	console.log(err);
	// 	res.status(500).send(err.data);
	// })

	Sybase.models.EDM.execSql('select top 10 * from ASEPIncidents where IncidentYear like \'%2016%\'')
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send(err.stack);
		});
}