import express from "express";
import path from "path"

const app = express()

app.listen(3000, () => {
    console.log('listening to port', 3000);
})

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
    
});

