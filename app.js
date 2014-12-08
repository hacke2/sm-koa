var koa = require('koa'),
	router = require('koa-router'),
	views = require('co-views'),
	data = require('./data/index')
	render = views(__dirname + '/views', {
	  map: { html: 'ejs' }
	}),
	staticServer = require('koa-static'),
	app = koa(),
	PORT = 3000;
 
app.use(router(app));
//app.use(staticServer(__dirname + '/res')); 
app.listen(PORT);






app.get('/', function *(){
	console.log(data)
	this.body = yield render('index', {
		title : '首页',
		list : data
	});
});

