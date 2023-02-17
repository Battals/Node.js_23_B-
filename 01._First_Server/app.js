const express = require("express");

const app = express()

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({message: `People have spun the bicycle wheel ${bicycleSpins}
    times `})
})

let kick = 0;
app.get("/kickdinosaur", (req, res) => {
    kick++
    res.send({message: `You've kicked the dinosaur ${kick} times `})
})

const birds = [];
birds.push([1, "one bird"]);
birds.push([2, "two birds"]);
birds.push([3, "three birds"]);
birds.push([4, "four birds"]);
birds.push([5, "five birds"]);



// get all
app.get("/", (req, res) => {
    res.send(birds)
})

// get
app.get("/:id", (req, res) => {
    const id = req.params.id
    birds.forEach(bird => {
        if(bird[0] == id ){
            console.log('bird found: ' + bird)
            res.send(bird)
        }
    });
})

app.get("/about", (req, res) => {
    console.log(req.query)
    res.send(`
    <h1>About</h1>
    <h3>This is my about page.</h3>
    `);
})

app.get("/bat", (req, res) =>  {
    console.log(req.query)
    
    res.send({message: `The bat is ${req.query.adjective} .`});
});
 
app.post("/package", (req, res) => {
    console.log()
    res.send({ message: req.body });
});

app.get("/bottle/:bottleSize", (req,res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize });
});

app.post("/package", (req,res) => {
    res.send({ message: req.body });
});
    

app.listen(8080);