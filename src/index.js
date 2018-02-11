const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
	ctx.body = { date: new Date(), headers: ctx.req.headers }
})

app.use(router.routes());
app.listen(3000);

