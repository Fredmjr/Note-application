import { getData, print } from "./utils.js"

const input = document.querySelector('#input')
const addBtn = document.querySelector('#addBtn')


function send(){
    print (getData(input))
}
fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify(send)
});
addBtn.addEventListener('click', send)