import log from "../libs/log";
import iconv from "iconv-lite";
import bodyParser from "body-parser";

module.exports = app => {

	const textBodyParser = bodyParser.text({limit: '5mb'});

	app.post("/api/utf8towin1251", textBodyParser, (req, res) => {

		if (!req.body) return res.sendStatus(400);

		log.debug(req.body);
		const win1251 = iconv.encode(req.body, "win1251");
		log.debug(win1251);

		res.set({'content-type': 'text/plain;charset=win-1251'});
		res.status(200).send(win1251);
		res.flush();

	});
};