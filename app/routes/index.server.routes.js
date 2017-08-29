module.exports = function(app) {
	var index = require(__dirname+'/../controllers/index.server.controller');
	app.get('/', index.render);
};