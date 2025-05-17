import Koa from "koa";

const app = new Koa();

declare module "http" {
  interface IncomingMessage {
    hello: {
      world: string;
    };
  }
}

app.use(async (ctx, next) => {
  ctx.req.hello = {
    world: "123",
  };
  return next();
});
app.use(async (ctx) => {
  console.info(ctx.req.hello);
  ctx.body = "Hello World";
});

app.listen(3000);
