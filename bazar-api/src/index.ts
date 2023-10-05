import {Hono} from "hono";
import items from "./items";

const app = new Hono();

app.route("/items", items);
app.showRoutes();

export default app;
