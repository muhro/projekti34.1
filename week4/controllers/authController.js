'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');


const login = (req, res) => {
    // TODO: add passport authenticate
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
         (email, password, done) => {
            //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
            return UserModel.findOne({email, password})
                .then(user => {
                    if (!user) {
                        return done(null, false, {message: 'Incorrect email or password.'});
                    }
                    return done(null, user, {message: 'Logged In Successfully'});
                })
                .catch(err => done(err));
        }
    ));
};


module.exports = {
    login,
};