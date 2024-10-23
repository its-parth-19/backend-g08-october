const express = require("express");
const connectDB = require("./config/dbConnections");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const dotenv = require("dotenv");
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
dotenv.config(); // Load environment variables

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine','hbs');
app.use(express.json());
app.use(cors());
// app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.send("working");
// })
app.get("/home",(req,res)=>{
  res.render("home",{
    username:"parth",
    email:"me@gmail.com",
  })
  
})
app.get("/users",(req,res)=>{
  res.render("user",{
    users:[{id:1,username:"nitesh",phone:1234},{id:2,username:"ankit",phone:3456}]
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
