/*

const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

// Register
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login
exports.login = async (req, res) => {
  passport.authenticate('local', { session: false }, (error, user) => {
    try {
      if (error || !user) {
        return res.status(401).json({ message: 'Incorrect username or password' });
      }

      req.login(user, { session: false }, async err => {
        if (err) {
          return res.status(500).send(err);
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, 'secret');
        return res.json({ token });
      });
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).send(error);
    }
  })(req, res);
};
*/