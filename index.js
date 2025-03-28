import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import fs from "fs"

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000
app.set("view engine", "hbs")
app.set("/views", path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "/views")))
app.use(express.static('views'));
app.use(express.static('public'));

app.use(express.json())




app.get("/redirects/notifications", (req, res) => {
  res.render("notifications")
})
app.post("/save", (req, res) => {
  const {title, notes} = req.body
  const content = `${title} \n ${notes}`
  fs.writeFile("note.txt", content, (err)=>{
    console.log(err)
  })
  res.json({
    "message": "data received",
    "data from the server": content
  })
})
//reading data
app.get("/read", (req, res)=>{
  fs.readFile("note.txt","utf-8", (err, data)=>{
    if (err){
      console.log(err)
    }
    res.send(data)
  } )
}

)

app.get("/note", (req, res) => {
  res.render("note")
})

app.post("/", (req, res) => {
  const {text} = req.body
  res.status(200)
})
/* app.get("/home", (req, res) => {
  res.render("index")
})

app.get("/cook", (req, res) => {
  res.render("index")
})
 */
app.listen(3000, () => {
  console.log("hello your app is at 3000")
})
