const express = require("express"); 
const helmet = require("helmet"); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const cookieSession = require("cookie-session"); 
const passport = require("passport"); 



dotenv.config(); 

// declare server
const server = express(); 


// routes 

const UserRouter = require("./routes/user"); 


server.use(cors()); 
server.use(helmet());  
server.use(express.json()); 



// user routes
server.use("/api", UserRouter); 




module.exports = server; 