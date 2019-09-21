import { Express, json } from "express";
import Passport from "passport";

export function bootstrapRest(app: Express) {
  const baseUrl = '/api/rest';
  app.use(baseUrl, Passport.session());

  const restController = app.use(baseUrl, json());

  restController.get(`${baseUrl}/characters`, (request, response) => {
    response.json([
      {
        name: "Hero",
        skills: ["swords", "boomerangs", "spears", "courage", "fists"]
      }
    ]);
  });
}
