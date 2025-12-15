const express = require("express")
const mongoose = require("mongoose")
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser")
const projectRoute = require("./routes/project")
require("dotenv").config()

const allowed = ["https://olorunfemi-portfolio.vercel.app", "https://olorunfemi-project-management.vercel.app"]
const app = express()
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowed.includes(origin)){
            callback(null, true)
        }
        else{
            callback(new Error("CORS not allowed from this origin"))
        }
    },
    credentials: true
}))

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(`${err}`))

app.use("/api/project", projectRoute)

const port = process.env.PORT || 8000

app.listen(port, ()=> console.log(`App is listening on port: ${port}`))