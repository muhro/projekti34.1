'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');

const login = (req, res) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log('err', err);
        if (err||!user){
            return res.status(400).json({
                message: 'something is not right',
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err){
                res.send(err);
                console.log('d');
            }
            //TODO: .env file access
            const token = jwt.sign(user, process.env.your_jwt_token);
            return res.json({user, token});
        });
    })(req, res);
};

module.exports = {
    login,
};
