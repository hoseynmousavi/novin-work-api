import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import data from "./data/data"
import contactRouter from "./routes/contactRouter"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.Promise = global.Promise
mongoose.connect(data.connectServerDb, {useNewUrlParser: true}).then(() => console.log("connected to db"))

contactRouter(app)

app.listen(data.port, () => console.log(`novin work is Now Running on Port ${data.port}`))