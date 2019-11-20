const express = require("express")
const api = express()
const router = require("./routes/index")

let port = 3000
api.listen(port, () => { 
    console.log("Server started on port: " + port)
})

api.use("/", router)
