var koa = require('koa'),
	path = require('path'),
	indexRouder = require('./routers/index'),
	staticCache = require('koa-static-cache'),
	app = koa(),
	PORT = 3000;

app.use(staticCache(path.join(__dirname, '/static'), {
        maxAge: 365 * 24 * 60 * 60
}))

app.use(indexRouder.middleware());

app.listen(PORT);







