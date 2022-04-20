const express = require('express');
const cors = require('cors');
const app = express();
require('./db/mongoose');
const userSchema = require('./models/user');
const userRouter = require('./router/user');
const port = 8000 || process.env.PORT;

// Middleware
app.use(express.json());
app.use(userRouter);
app.use(cors());

app.listen(port, () => {
  console.log('Server is running');
});
