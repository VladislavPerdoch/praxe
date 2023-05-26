const express = require('express');
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

/*app.post('/contact', (req, res) => {
    if(!req.body.name) {
        return res.status(400).send("Name is required");
    }


    res.status(201).send("Thank you " + req.body.name);
});

app.post("/login", (req, res) => {
    if(!req.header("x-auth-token")) {
        return res.status(400).send("No Token");
    }

    if(req.header("x-auth-token") !== "123456") {
        return res.status(401).send("Not authorized");
    }
    res.send("Legged in");
})*/

app.put("/post/:id", (req, res) => {

    res.json({
        id: req.params.id,
        title: req.body.title
    })

})



app.listen(5500, () => console.log('Server started on 5500'));


//res.send(req.body.name/email);
//req.header/body