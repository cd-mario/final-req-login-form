const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}


//register API
const registerUser = async (req, res) => {
    try {
        const {name, email, address, password} = req.body;
        //check the name input
        if(!name) {
            return res.json({
                error: 'name is required 😞'
            })
        }
        //check the address input
        if(!address) {
            return res.json({
                error: 'address is required 😞'
            })
        }

        // check the password input 
        if (!password) {
            return res.json({
                error: 'password is required 😞'
            });
        } else if (password.length < 6) {
            return res.json({
                error: 'password should be at least 6 characters long 😞'
            });
        } else if (!/[A-Z]/.test(password)) {
            return res.json({
                error: 'password should contain at least one uppercase letter 😞'
            });
        } else if (!/[0-9]/.test(password)) {
            return res.json({
                error: 'password should contain at least one number 😞'
            });
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return res.json({
                error: 'password should contain at least one symbol 😞'
            });
        }

        //check email input
        const exist = await User.findOne({email});
        if(exist) {
            return res.json ({
                error: 'Email  is taken already 😞'
            })
        } else if(!email) {
            return res.json({
                error: 'Email is required 😞'
            })
        }

        const hashedPassword = await hashPassword(password)
        //create user in db
        const user = await User.create({
            name, 
            email,
            address, 
            password: hashedPassword
        })

        return res.json(user);
    } catch (err) {
        console.log(err)
    }
}

//login API
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check if user exists
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        //check if password match
        const match = await comparePassword(password, user.password);
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user) 
            })
        } else {
            res.json({
                error: 'password do not match'
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}