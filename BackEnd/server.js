// This is the entry point for all our APIs. Some might say it app.js, index.js or main.js, but all these are just a conventions.
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready12345");
})

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});