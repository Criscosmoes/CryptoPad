const express = require("express"); 
const helmet = require("helmet"); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const cookieSession = require("cookie-session"); 
const passport = require("passport"); 


dotenv.config(); 

// declare server
const server = express(); 




module.exports = server; 