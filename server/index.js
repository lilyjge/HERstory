const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require('cors');
const qList = require("./seeds"); 

app.use(express.urlencoded());

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  score: Number
});

const User = mongoose.model('User', UserSchema);

app.post('/api/sendEmail', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if(user) res.send(email);
  const score = 0;
  try {
      const newUser = new User({ email, score });
      await newUser.save();
      console.log('Email and score saved:', { email, score });
      res.status(201).send(email);
  } catch (error) {
      console.error('Error saving user:', error);
      // res.send('Error creating user');
  }
});

app.get('/api/getScore/:email', async (req, res) => {
  const { email } = req.params;
  if(email === null) res.send(0);
  // console.log(email);
  try {
      const user = await User.findOne({ email });
      if (user) {
          res.status(200).json({score: user.score });
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).send('Error fetching user');
  }
});

app.put('/api/updateScore/:email/:newScore', async (req, res) => {
  const { email, newScore } = req.params;
  console.log(email);
  console.log(newScore);
  try {
      const user = await User.findOne({ email });
      if(user.score < newScore){
        await User.findOneAndUpdate(
          { email },
          { score: newScore }
        );
      }
      if (user) {
          res.status(200).json({ email: user.email, updatedScore: user.score });
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error('Error updating score:', error);
      res.status(500).send('Error updating score');
  }
});

app.get("/questions/:id", (req, res) => {
  const {id} = req.params;
  res.send(qList[id]);
})

app.listen(8000, () => {
  console.log("listening");
});