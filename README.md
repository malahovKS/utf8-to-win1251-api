# Atomic Web Service (AWS, REST API) for converting text from UTF-8 to WIN-1251, powered by [iconv-lite](https://github.com/ashtuchkin/iconv-lite) and [Node.js](https://nodejs.org)

Part of the ["Personal Research Information System"](http://icybcluster.org.ua:34145/) atomic web services ecosystem.

### Requirements/Dependencies

Program runs on modern MacOS and Linux distributions.
To run program you will need:

* [Node.js](https://nodejs.org)

### Install

##### For [Ubuntu Server Linux](https://www.ubuntu.com/download/server) distribution

```
$ git clone https://github.com/malakhovks/utf8-to-win1251-api.git
$ npm install
```

### Use cases

#### Basic usage. Run and config

Run program in **development** mode (default port: 3002; log-mode: development).
[Winston](https://www.npmjs.com/package/winston) logging level will be set to **debug** and transport debug/info/warning logs to Console:

```
$ npm run start-development
```

You can set **port** in ./config/development.json:

```
{
  "port": 3002,
  "log-mode": "development"
}
```

Run program in **production** mode (default port: 3002; log-mode: production).
[Winston](https://www.npmjs.com/package/winston) logging level will be set to **error** and transport error logs to Console:

```
$ npm run start-production
```

You can set **port** in ./config/production.json:

```
{
  "port": 3002,
  "log-mode": "production"
}
```

##### Quick example with cURL:

```
$ curl -X POST -H "Content-Type: text/plain" --data "this is raw data" http://127.0.0.1:3002/api/utf8towin1251
```

##### Response:

```
HTTP/1.1 200 OK
Content-Type: text/plain; charset=win-1251
body: raw text
```

#### Use with [PM2](http://pm2.keymetrics.io/). Run and config

###### Coming soon

#### Use with custom queue reverse proxy server. Run and config

###### Coming soon

#### Use with custom server of an automatic composition of atomic web services

###### Coming soon
