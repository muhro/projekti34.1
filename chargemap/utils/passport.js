'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const userModel = require('../models/users');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// local strategy for username password login
passport.use(new Strategy(
    (username, password, done) => {
        try {
            const user = userModel.getUserLogin(username);
            console.log('Local strategy', user); // result is binary row
            if (user === undefined) {
                return done(null, false, {message: 'Incorrect email.'});
            }
            if (user.password !== password) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, {...user}, {message: 'Logged In Successfully'});
        }
        catch (err) {
            return done(err);
        }
    }));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'TestiKey',
    },
    (jwtPayload, done) => {
        console.log('payload', jwtPayload);
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        const user = userModel.getUser(jwtPayload.id);
        console.log('pl user', user);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    },
));


module.exports = passport;