var koa = require('koa')
    , router = require('koa-router')
    , app = koa()
    ;

app.use(router(app));

app.get('/test', function *(next){
    console.log('test1');
    yield next;
}, function *(next){
    console.log('test2');
    yield next;
});

app.get('/', function *(next){
    console.log('root path');
    yield next;
});

app.listen(3000);