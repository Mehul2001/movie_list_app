const express = require("express");
const app = express();
const request = require("request");
const port = 3000;


app.get("/results", (req, res) => {
    request("http://www.omdbapi.com/?s=iowa&apikey=thewdb", (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            res.render("results.ejs", { data })
        }
    })
})

app.listen(port, console.log(`Movie App started at  ${port}`))