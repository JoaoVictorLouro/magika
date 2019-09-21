import { Express } from "express";
import Mongoose from "mongoose";
import AppConfig from '../app-config';

export function bootstrapModels(app: Express) {
  const connectionStr = `mongodb://localhost:${AppConfig.MONGODB_PORT}/${AppConfig.MONGODB_DB}`;
  Mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true},
  (err?: Error) => {
    if (err) {
      console.error(`Failed to connect to MongoDB @ ${connectionStr}`);
      process.exit(1);
    }
  });
};
