const express = require("express");
const app = express();
const request = require("request");
const port = 3000;

app.get("/", (req, res) => {
    res.render("search.ejs")
})
app.get("/results", (req, res) => {
    var query = req.query.movie;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            res.render("results.ejs", { data })
        }
    })
})

app.listen(port, console.log(`Movie App started at  ${port}`))