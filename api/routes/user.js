const router = require("express").Router(); 
const User = require("../schemas/user");
const axios = require('axios');


router.get("/users", async (req, res) => {

    try {

        const users = await User.find({}); 

        res.status(200).send(users); 

    }
    catch(e){
        res.status(500).send(e.message); 
    }


})


router.post("/users", async (req, res) => {


    try {

        const user = new User({
            username: req.body.username, 
            googleId: 123, 
        })

        await user.save(); 
        res.status(201).send("user created"); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})


router.post("/send", async (req, res) => {

    try {

        if (!req.body.id){
            return res.status(400).send("Need a crypto id"); 
        }

        const response = await axios.get(`https://api.coinranking.com/v2/coin/${req.body.id}/history?timePeriod=7d`, {
            headers: {
                "x-access-token": "coinranking462d399a9604c75a98f87f7dc1037a55a5471bf0c676f64a", 
            }
        })

        res.status(200).send(response.data)
    }
    catch(e){
        res.send(e.message); 
    }

})

module.exports = router; 