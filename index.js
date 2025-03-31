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
//saving director folder
const saveDir = path.join(__dirname, 'notes')
if (!fs.existsSync(saveDir)){
  fs.mkdirSync(saveDir)
}


app.get("/redirects/notifications", (req, res) => {
  res.render("notifications")
})
app.post("/save", (req, res) => {
  const {title, notes} = req.body
  const content = `<p>${title}</p> \n <p>${notes}</p>`
  let filepath = path.join(saveDir, `${title}.md`)
  fs.writeFile(filepath, content, (err)=>{
    console.log(err)
  })
  res.json({
    "message": "data received",
    "data from the server": content
  })
})
//reading data
app.get("/read/:title", (req, res)=>{
  let filepath = path.join(saveDir, `${req.params.title}.md`)
  fs.readFile(filepath,"utf-8", (err, data)=>{
    if (err){
      console.log(err)
    }
    res.send(data)
  } )
})

app.get("/list", (req, res) => {
  fs.readdir(saveDir, (error, files)=>{
    let filterFiles = []
    for (const file of files){
      if (file.endsWith(".md")){
        filterFiles.push(
          file.replace(".md", "")
        )
      }
    }
    const filteredFilesWithoutBlackets = filterFiles.join("\n")
    res.render("components/list", {
      files: filterFiles,
    })
  })
  })



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
