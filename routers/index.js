var Router = require('koa-router'),
	views = require('co-views'),
	render = views('views', {
	  map: { html: 'ejs' }
	}),
	router = new Router(),
	data = require('../data/index');

router.get('/', function *(){
	this.body = yield render('index', {
		title : '神马搜索',
		list : data
	});
});

module.exports = router;
