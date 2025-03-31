import { getData, print } from "./utils.js"

const noteText = document.querySelector('#noteText')
const noteTextTitle = document.querySelector('#noteTextTitle')
const floatSave = document.getElementById("floatSave");
const boardCard= document.getElementById("boardCard");


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
/* const displayNotes = () => {
  fetch('/list', { method: 'GET' })
    .then(response => response.json())
    .then((data) => {
      boardCard.innerHTML = `
        ${data.files.map((file) => (
          `
            <div id="${file}"
            hx-get="/read/${file}"
            hx-target="body"
            hx-swap="innerHTML"
            hx-trigger="click"
            style="margin-top:5px; margin-bottom:-2px; font-size: 20px;">
              <div id="notes">
                <div id="leftSider">
                  <span style="font-size: 12px;">${file}</span>
                  <span>
                    <p id="titleFromData" style="margin-top:5px; margin-bottom:-2px; font-size: 20px;">${file}</p>
                  </span>
                </div>
                <div id="subMenu">
                  <span class="modifyNoteBtns"><img src="/icons/edit.png" width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
                  <span class="pinNoteBtn"><img src="/icons/push-pin.png" width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
                  <span class="deleteNoteBtn"><img src="/icons/delete.png" width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
                </div>
              </div>
            </div>
          `
        )).join('')}
      `;

      const board = document.getElementById('board');
      const content = document.getElementById('content');
      
      // Add event listener to each button
      const modifyNoteBtns = document.querySelectorAll('.modifyNoteBtns');
      modifyNoteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const showEditPage = document.getElementById('showEditPage');
          showEditPage.style.display = 'block';
          board.style.display = 'none';
          content.style.display = 'none';
        });
      });
    })
}; */

/* 
view = (title) =>{
    window.location.replace(`/read/${encodeURIComponent(title)}`);
}
 */

//here we are fetching dat, d
/* const displayNotes=()=>{
    fetch('/list', {
        method: 'GET'
    })
    .then(response=>response.json())
    .then((data)=>{
        boardCard.innerHTML=` 
          ${data.files.map((file) => (
    `<div style="margin-top:5px; margin-bottom:-2px; font-size: 20px;">
    
    <div id="notes">
          <div id="leftSider">
            <span>${file}</span>
            <span>
              <p id="titleFromData" style="margin-top:5px; margin-bottom:-2px; font-size: 20px;">${file}</p>
              <p style="margin:5px 0; font-size: 12px;  color:rgb(122, 121, 121);">${file} notes</p>
            </span>

          </div>
          <div id="subMenu"> 
            <span class="editNoteBtn"><img src="/icons/edit.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
            <span class="pinNoteBtn"><img src="/icons/push-pin.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
            <span class="deleteNoteBtn"><img src="/icons/delete.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
          </div>
        </div>
    </div>`
  )).join('')}`
    })
}
 */

/* // Display contents of files
const editNoteBtns = document.querySelectorAll('.editNoteBtn');
const content = document.getElementById("content");
const clearedNotes = document.getElementById("clearedNotes");
const searchPage = document.getElementById("search-page");

editNoteBtns.forEach((editNoteBtn) => {
  editNoteBtn.addEventListener('click', () => {
    const showEditPage = document.getElementById("showEditPage");
    const board = document.getElementById("board");
    showEditPage.style.display = "block";
    content.style.display = "none";
    clearedNotes.style.display = "none";
    board.style.display = "none";
    searchPage.style.display = "none";

    const titleFromData = editNoteBtn.parentNode.parentNode.querySelector('#titleFromData').textContent;
    fetch(`../notes/${titleFromData}.md`)
      .then((response) => response.text())
      .then((data) => {
        const noteText = document.getElementById('noteText');
        noteText.textContent = data;
      })
      .catch((error) => console.error(error));
  });
});
 */


//this below calls the predefined function(send) and (send) is defined at the top.
floatSave.addEventListener('click', send)
/* document.addEventListener('DOMContentLoaded', displayNotes) */

/* let modifyNoteBtns = document.querySelectorAll("modifyNoteBtns");
modifyNoteBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('Button clicked!');
    mainEdit.style.display = "block";
    mainContent.style.display = "none";
  });
}); */


