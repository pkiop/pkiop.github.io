import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import allRouter from 'router/index';
import cors from '@koa/cors';
import dotenv from 'dotenv';

dotenv.config();

const corsOptions = {
  origin: (ctx: Koa.Context) => ctx.request.header.origin,
  credentials: true,
};

const app = new Koa();
app.use(cors(corsOptions));
app.use(bodyParser());
const router = new Router();

router.use(allRouter.routes());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err;
  }
});
app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx: Koa.Context) => {
  ctx.body = "<Button onclick=(function() {alert('하이')})>하이</Button>";
});

app.listen(3000);
