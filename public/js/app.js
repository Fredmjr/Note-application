import { getData, print } from "./utils.js"

const noteText = document.querySelector('#noteText')
const noteTextTitle = document.querySelector('#noteTextTitle')
const floatSave = document.getElementById("floatSave");

function send(){
    let result = { 
        "title": getData(noteTextTitle), 
        "notes":  getData(noteText) 
    };
    print(result)

fetch('/save', {
    method: 'POST',
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify(result)
})
.then(response=>response.json())
.then(data=>print(data))
.catch(error=>print(error))

}


//here we are fetching dat, d
const displayNotes=()=>{
    fetch('/read', {
        method: 'GET'
    })
    .then(response=>response.text())
    .then(data=>print(data))
}

//this below calls the predefined function(send) and (send) is defined at the top.
floatSave.addEventListener('click', send)

