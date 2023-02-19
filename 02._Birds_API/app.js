const express = require("express");
const app = express();

app.use(express.json());

const birds = [
    {id: 1, name: "Bird1", maleRating: 5, femaleRating: 7}
];

app.get("/birds", (req, res) => {
    res.send({date: birds});
});

app.get("/birds/:id", (req, res) => {
    const foundBird = birds.find((bird => bird.id === Number(req.params.id)));

    res.send({date: foundBird});
});

app.listen(8080, () => {
    console.log("Server is running", 8080);
});