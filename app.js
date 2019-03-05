const express = require("express");
const app = express();
const request = require("request");
const port = 3000;


app.get("/results", (req, res) => {
    request("http://www.omdbapi.com/?s=star&apikey=thewdb", (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const results = JSON.parse(body);
            res.send(results.Search[0]);
        }
    })
})

app.listen(port, console.log(`Movie App started at  ${port}`))