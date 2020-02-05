import Koa from "koa";
import koaBody from "koa-bodyparser";
import router from "./routes";

export const app = new Koa();

app.use(koaBody());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

