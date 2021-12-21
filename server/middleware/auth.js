const { User } = require("../models/User");

let auth = (req, res, next) => {

    // Get tokens from client cookie: cookie-parser
    let token = req.cookies.x_auth; // get 'x_auth'

    console.log("prev auth");
    // Decrypt Token -> Find user
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true });

        req.token = token;
        req.user = user;
        console.log("auth_req success");
        next(); // middleware done -> move on to the next
    })

    // user O, auth Yes
    // user X, auth No
};

module.exports = { auth };