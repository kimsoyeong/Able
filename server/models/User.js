const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // user vs manager
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    }, 
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function( next ) {
    var user = this;

    if(user.isModified('password')) { // only when the password field of the user schema changes
        // encrypt password
        bcrypt.genSalt(saltRounds, function(err, salt) { // genSalt(): generate Salt
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) { // hash(): generate hash
                if(err) return next(err);

                user.password = hash; // change user.password from palinText to hashed password.
                next();
            });
        });
    } else { // when another field changes
        next();
    }
});


userSchema.methods.comparePassword = function(plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch); // isMatch == true
    });
};

userSchema.methods.generateToken = function(cb) {
    var user = this;

    // jsonwebtoken => generate token
    var token = jwt.sign(user._id.toHexString(), 'secretToken');
    // user.id + 'secretToken' = token
    // ->
    // 'secretToken' -> user._id

    user.token = token;
    user.save(function(err, user) {
        if(err) return cb(err);
        cb(null, user); // no err, only user
    });
};

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // user._id + 'secretToken' => token
    // decode token
    jwt.verify(token, 'secretToken', function(err, decoded) { // decoded == user._id
        // user._id => find user
        // Make sure that the token imported from the client matches the token stored in the DB.
        user.findOne({ '_id': decoded, 'token': token }, function(err, user) {
            if(err) return cb(err);
            cb(null, user);
        })

    });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };