import log from "../libs/log";
import iconv from "iconv-lite";

module.exports = app => {

	app.get("/api/utf8towin1251", (req, res) => {
		return res.status(200).json({status: "utf8 ot win1251 API"});

		//TODO res.flush() (node:28258) DeprecationWarning: OutgoingMessage.flush is deprecated. Use flushHeaders instead.
		// res.flush();

	});

	app.post("/api/utf8towin1251", (req, res) => {

		//if (!req.body) return res.sendStatus(400);

		log.debug(req.body);
		const win1251 = iconv.encode(req.body, "win1251");
		log.debug(win1251);

		res.type('text/plain');
		res.status(200).send(win1251);
		res.flush();

	});
};