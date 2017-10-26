import log from "../libs/log";

module.exports = app => {
	app.listen(app.get("port"), () => {
		log.info(`UTF8 to WIN1251 API - Port ${app.get("port")}`);
	});
};