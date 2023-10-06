import {Hono} from "hono";
import items from "./items";

const app = new Hono();

app.route("/api/items", items);
app.get("/", (context) => context.json("Api working!"))
app.showRoutes();

export default app;
