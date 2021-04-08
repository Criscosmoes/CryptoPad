const dotenv = require("dotenv"); 
const mongoose = require("mongoose"); 
const server = require("./api/server");
const express = require("express")


dotenv.config(); 



if (process.env.NODE_ENV === "production"){

    const path = require("path"); 


    server.use(express.static(path.join(__dirname, 'client/build')));

    server.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
    })
}




// Connect to DB
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}, () => console.log("Connected to DB")); 


const PORT = process.env.PORT || 4000; 


server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
