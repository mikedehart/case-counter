
const Sybase = require('../../conf/db.dev.js');

exports.get = function(req, res, next) {
	Sybase.models.Country.by(Sybase.DBPools.development);

	let x = Sybase.models.Country.findAll({ Country: "BR" }).then((data) => {
		res.json(data);
	})
	.catch((err) => {
		console.log(err);
		res.status(500).send(err.data);
	})
}