const Sybase = require('../../conf/db.dev.js');


exports.get = function(req, res, next) {
	Sybase.models.UX.by(Sybase.DBPools.development);

	// let x = Sybase.models.UX.findAll({ Priority: "Very high" }).then((data) => {
	// 	res.json(data);
	// })
	// .catch((err) => {
	// 	console.log(err);
	// 	res.status(500).send(err.data);
	// })

	Sybase.models.UX.execSql('select top 10 * from MOBIncidents where IncidentNumber like \'%234%\'')
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send(err.stack);
		});
}