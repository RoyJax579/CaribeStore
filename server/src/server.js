const express = require("express"),
env = require("dotenv"),
app = express(),
PORT = process.env.PORT || 2000

//environment variable
env.config()

app.get("/", (req, res, next) => {
    res.status(200).json({
        msg: "Hello from the other side!😉" 
    })
})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))