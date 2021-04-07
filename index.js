const dotenv = require("dotenv"); 
const mongoose = require("mongoose"); 
const server = require("./api/server"); 
const express = require("express"); 


dotenv.config(); 


// Connect to DB

const PORT = process.env.PORT || 4000; 


server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
