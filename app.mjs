import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
// import Comment from './models/Comment.js';
// import Post from './models/Post.js';
import Users from './models/User.mjs';
import users from './utilities/data.js';
import User from './models/User.mjs';

console.log(users)

//Configurationsnode
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;
await mongoose.connect(process.env.MONGO_URI);


//////
// app.get('/seed', async (req, res) => {
//   try {
//      await Users.create();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
app.get('/', async (req, res) => {
  await Users.deleteMany({});
  await Users.create(users);

  res.send(`Database Seeded`);
});
/////
// app.get('/', async (req, res) => {
//   try {
//     const users = await Users.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// POST a new user
app.post('/seed', async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    age: req.body.email,
    // other user fields
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
///////


  // Middleware
app.use(bodyParser.json());



// // GET all users
// app.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });




//Error checking middleware
app.use((err, _req, res, next) => {
  res.status(500).send('Some Internal Server Error');
});



  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });