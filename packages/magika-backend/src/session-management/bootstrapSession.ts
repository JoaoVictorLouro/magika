import { Express, json } from "express";
import ExpressSession from "express-session";
import { createClient } from "redis";
import ConnectRedis from "connect-redis";
import AppConfig from '../app-config';
import PassportGoogleOAuth from "passport-google-oauth20";
import PassportLocal from "passport-local";
import Passport from "passport";
import { UserMongooseModel } from '../models/mongoose-models/user.mongoose-model';
import { IUserDB } from "magika-models";

export function bootstrapSession(app: Express) {
  const RedisStore = ConnectRedis(ExpressSession);

  app.use(ExpressSession({
    secret: AppConfig.SESSION_SECRET,
    store: new RedisStore({ client: createClient(AppConfig.REDIS_PORT) }),
    resave: false,
    saveUninitialized: true
  }));

  Passport.use(new PassportLocal.Strategy({}, (email: string, password: string, done) => {
    const user = {};
    UserMongooseModel.findOne({
      email: {$eq: email}
    }, (err?: Error, user) => {
    })
    done(user);
  }));

  Passport.use(new PassportGoogleOAuth.Strategy({
    clientID: AppConfig.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: AppConfig.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: 'http://localhost:8081/oauth/google/callback'
  }, (accessToken, refreshToken, profile, cb) => {
    cb(undefined, profile);
  }));

  Passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

  Passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });

  app.use(Passport.initialize());
  app.use('/api', Passport.session());
  app.use('/api', (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  });

  app.get('/oauth/google',
    Passport.authenticate('google', { scope: ['profile'] }));

  app.get('/oauth/google/callback',
    Passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );

  app.post('/login', Passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => res.redirect('/')
  );
}
