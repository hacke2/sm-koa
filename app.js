var koa = require('koa'),
	router = require('koa-router'),
	views = require('koa-views'),
	staticServer = require('koa-static'),
	app = koa(),
	PORT = 3000;
 
app.use(views('./views', 'jade')); 

//app.use(staticServer(__dirname + '/res')); 
app.use(router(app));
app.listen(PORT);

app.get('/', function *(next){
	this.body = 'hello koa';
});

