import express, {Request, Response} from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("hello")
})

const PORT = 5001
app.listen(PORT, () => {
    console.log("we started on port", PORT)
})