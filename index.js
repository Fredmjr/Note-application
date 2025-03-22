import express from "express"

const app = express()
const port = 3000
app.get("/", (req, res) => {
  res.send("home ")
})
app.listen(port, () => {
  console.log("hello your app is at 3000")
})
