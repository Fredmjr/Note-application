//Code starts here
//DATA FOR ALL NOTE APP UI/UX
const data = [
  { id: 1, nameNote: 'Note#1', numNotes: '30' },
  { id: 2, nameNote: 'Note#2', numNotes: '25' },
  { id: 3, nameNote: 'Note#3', numNotes: '40' },
  { id: 4, nameNote: 'Note#4', numNotes: '16' },
];

//NAVIBAR
//Grobal vairables
const content = document.getElementById("content");
const createPage = document.getElementById("createPage");


//Dropdown-menu
  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownMenu = document.getElementById('dropdown-menu');

  dropdownButton.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

//Cleared Notes
  const clearedNotesBtn = document.getElementById('clearedNotesBtn');
  const clearedNotes = document.getElementById('clearedNotes');
  const searchPage = document.getElementById("search-page");
  const notePad = document.getElementById("notePad");
  clearedNotesBtn.addEventListener('click', () => {
    createPage.style.display = "none";
    content.style.display = "block";
    board.style.display = "none";
    clearedNotes.style.display = "block";
    searchPage.style.display = "none";
});

  


//Back to notes page
backToNotes.addEventListener('click', () => {
  const clearedNotes = document.getElementById("clearedNotes");
  
  searchPage.style.display = "none";
  board.style.display = "block";
  clearedNotes.style.display = "none";
  content.style.display = "block";
  createPage.style.display = "none";
})

//Notification/Messages
//???????

//Search
const search_icon = document.getElementById('search-icon');

search_icon.addEventListener('click', () => {
  // Display the search page & hide the notePad page
  const searchPage = document.getElementById("search-page");
  const board = document.getElementById("board");
  
  
  searchPage.style.display = "block";
  board.style.display = "none";
  content.style.display = "block";
  createPage.style.display = "none";
  clearedNotes.style.display = "none";
  // Focus on the search input
  const searchInput = document.getElementById("search-input");
  searchInput.focus();

  // Add event listener to search input
  searchInput.addEventListener("input", search);
});


// Function to search data
function search() {
  // Get the search query
  const searchQuery = document.getElementById("search-input").value.toLowerCase();

  // Filter the data based on the search query
  const searchResults = data.filter((item) => item.nameNote.toLowerCase().includes(searchQuery));

  // Display the search results
  const searchResultsList = document.getElementById("search-results");
  searchResultsList.innerHTML = "";
  searchResults.forEach((result) => {
    const searchedNote = document.createElement("searchedNote");
    searchedNote.id = 'searchedNoteId';
    searchedNote.innerHTML = 

    searchedNote.textContent = `
        <div id="searchedNotes">
          <div id="searchedLeftSider">
            <span>${searchedNote.textContent = result.id}</span>
            <span>
              <p style="margin-top:5px; margin-bottom:-2px; font-size: 20px;">${searchedNote.textContent = result.nameNote}</p>
              <p style="margin:5px 0; font-size: 12px;  color:rgb(122, 121, 121);">${searchedNote.textContent = result.numNotes} notes</p>
            </span>

          </div>
          <div id="searchedSubMenu"> 
            <img src="/icons/edit.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;">
            <img src="/icons/push-pin.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;">
            <img src="/icons/delete.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;">
          </div>
        </div>
    `;;
    searchResultsList.appendChild(searchedNote);
  });
}

//create/new note page
  const addBtn = document.getElementById("addBtn");
  
  addBtn.addEventListener('click', () => {
    const board = document.getElementById("board");
    content.style.display = "none";
    createPage.style.display = "block";
    clearedNotes.style.display = "none";
    board.style.display = "none";
    searchPage.style.display = "none";
});




//CATEGORY NOTE
//data array objects is the same used on search functions
  const boardCard = document.getElementById('boardCard');

  data.map((item) => {
    
    const noteCard = document.createElement('noteCard');
    noteCard.id = 'noteCardId';
    noteCard.innerHTML = `
        <div id="notes">
          <div id="leftSider">
            <span>${item.id}</span>
            <span>
              <p style="margin-top:5px; margin-bottom:-2px; font-size: 20px;">${item.nameNote}</p>
              <p style="margin:5px 0; font-size: 12px;  color:rgb(122, 121, 121);">${item.numNotes} notes</p>
            </span>

          </div>
          <div id="subMenu"> 
            <span class="editNoteBtn"><img src="/icons/edit.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
            <span class="pinNoteBtn"><img src="/icons/push-pin.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
            <span class="deleteNoteBtn"><img src="/icons/delete.png"  width="15" alt="" style="filter: brightness(0) invert(1); cursor: pointer;"></span>
          </div>
        </div>
       
    `;

    boardCard.appendChild(noteCard);
    
  });

  //NOTE PAGE
  //Discarding Note
  const floatDiscard = document.getElementById("floatDiscard");
  floatDiscard.addEventListener('click', () => {
    createPage.style.display = "none";
    content.style.display = "block";
    
    board.style.display = "block";
});

  const floatSave = document.getElementById("floatSave");
  floatSave.addEventListener('click', () => {
const savePopup = document.getElementById('savePopup');

setTimeout(() => {
  savePopup.style.display = 'block';

  setTimeout(() => {
    savePopup.style.display = 'none';
  }, 3000);
}, 500);
});

//Text area
const noteText = document.getElementById('noteText');

noteText.addEventListener('input', () => {
  noteText.style.height = 'auto';
  noteText.style.height = noteText.scrollHeight + 'px';
});

const noteTextTitle = document.getElementById('noteTextTitle');

noteTextTitle.addEventListener('input', () => {
  noteTextTitle.style.height = 'auto';
  noteTextTitle.style.height = noteTextTitle.scrollHeight + 'px';
});


//Microphone audio recording
 let audioHere = document.getElementById ("audioHere");
  let searchInput = document.getElementById ("search-input"); 
document.getElementById('mircoPhone').onclick = function () {
  audioHere.style.display = "block";
  searchInput.style.display = "none";  
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
recognition.lang = "en-GB";
recognition.continuous = true;

document.onclick = recognition.start();

recognition.onresult = (event) => {
    for (const result of event.results){
    element.innerText = result[0].transcript;
}
}  
}

/* 
document.getElementById('mircoPhone').onclick = function () {
  let searchInput = document.getElementById("search-input");
  audioHere.style.display = "block";
  searchInput.style.display = "none";

  let element = document.getElementById("audioHere");
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
  recognition.lang = "en-GB";
  recognition.continuous = true;
  recognition.onresult = (event) => {
    for (const result of event.results) {
      element.innerText += result[0].transcript;
    }
  };
  recognition.onerror = (event) => {
    console.error('Error occurred during recognition:', event.error);
  };
  document.onclick = () => recognition.start();
}
 */


//  Return search input while removing microphone
const returnSearchBar = document.getElementById('returnSearchBar');
returnSearchBar.addEventListener('click', ()=>{
    audioHere.style.display = "none";
  searchInput.style.display = "block";
})


//Icon media query screen size
/* const iconMedisSize = {
  if(){}
  else{}
} */


//DATA TRANSFER
/* const floatSave = document.getElementById("floatSave");
floatSave.addEventListener("click", function() {
  let noteTextTitle = document.getElementById("noteTextTitle").value;
  let noteText = document.getElementById("noteText").value;
  let result = { "title": noteTextTitle, "notes": noteText };
  console.log(result);
  fetch('http://localhost:3000', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result)

  });
}); */


//Edit note page (ET help. used here for loop)
const showEditPage = document.getElementById("showEditPage");
const editNoteBtns = document.getElementsByClassName("editNoteBtn");
function editngNoteScreen() {
  const board = document.getElementById("board");
    showEditPage.style.display = "block";
  content.style.display = "none";
  clearedNotes.style.display = "none";
  board.style.display = "none";
  searchPage.style.display = "none";
}

for (let i = 0; i < editNoteBtns.length; i++) {
  editNoteBtns[i].addEventListener('click', editngNoteScreen);
}


//Showing popup message for saved edits
const saveEditPopup = document.getElementById("saveEditPopup");
const floatAppend = document.getElementById("floatAppend");
floatAppend.addEventListener('click', () => {
setTimeout(() => {
  saveEditPopup.style.display = 'block';

setTimeout(() => {
  saveEditPopup.style.display = 'none';
}, 3000);
}, 500);
});


//closing the edit page
const floatAppendDiscard = document.getElementById("floatAppendDiscard");
floatAppendDiscard.addEventListener('click', () => {
  showEditPage.style.display = "none";
  content.style.display = "block"; 
  board.style.display = "block";
});

