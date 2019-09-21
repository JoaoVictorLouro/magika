import Express from "express";
import Morgan from "morgan";
import CookieParser from "cookie-parser";
import ErrorHandler from "errorhandler";

import AppConfig from "./app-config";
import { bootstrapRest } from './api/rest/bootstrap-rest';
import { bootstrapGraphQL } from './api/graphql/bootstrap-graphql';
import { bootstrapSession } from './session-management/bootstrapSession';

const app = Express();
app.use(Morgan(AppConfig.ENVIRONMENT));
app.use(CookieParser());
app.use(ErrorHandler());

bootstrapSession(app);
bootstrapRest(app);
bootstrapGraphQL(app);

app.use("/assets", Express.static("assets"));

app.get("", (req, response) => {
  response.send("Kit API");
});

app.use((req, res, next) => {
  res.status(404).send("Nothing here mate...");
});

app.listen(AppConfig.SERVER_PORT, () => {
  console.log(`Server has started on port ${AppConfig.SERVER_PORT}`);
});
