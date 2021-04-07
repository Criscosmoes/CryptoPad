const router = require("express").Router(); 
const User = require("../schemas/user"); 


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

module.exports = router; 