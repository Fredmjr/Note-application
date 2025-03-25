//so process is simple:
/* .data is mapp from the Object, 
so when adding eg when we add, we are just pushing a new object to an array of objects.
add mapping our array of objects using js in div */




/* const data = [
    { id: 1, nameNote: 'Note#1', numNotes: '30' },
    { id: 2, nameNote: 'Note#2', numNotes: '25' },
    { id: 3, nameNote: 'Note#3', numNotes: '40' },
  ];
  
  const container = document.getElementById('container');

  data.map((item) => {
    const noteCard = document.createElement('noteCard');
    noteCard.innerHTML = `
    <div id="something">
     <p>${item.id}</p>
      <div>
      <span id="noteSomething">${item.nameNote}</span>
      <p>${item.numNotes} notes</p>
      </div>
    </div>
    `;
    container.appendChild(noteCard);
    
  }); */


//Code starts here
//DATA FOR ALL NOTE APP UI/UX
const data = [
  { id: 1, nameNote: 'Note#1', numNotes: '30' },
  { id: 2, nameNote: 'Note#2', numNotes: '25' },
  { id: 3, nameNote: 'Note#3', numNotes: '40' },
];

//NAVIBAR
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
    clearedNotes.style.display = "block";
    searchPage.style.display = "none";
    notePad.style.display = "none";
});

  


//Back to notes page
backToNotes.addEventListener('click', () => {
  const clearedNotes = document.getElementById("clearedNotes");
  
  searchPage.style.display = "none";
  board.style.display = "block";
  clearedNotes.style.display = "none";
})

//Notification/Messages
//???????

//search
const search_icon = document.getElementById('search-icon');

search_icon.addEventListener('click', () => {
  // Display the search page & hide the notePad page
  const searchPage = document.getElementById("search-page");
  const board = document.getElementById("board");
  
  searchPage.style.display = "block";
  board.style.display = "none";
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
    const listItem = document.createElement("LI");
    listItem.textContent = result.nameNote;
    searchResultsList.appendChild(listItem);
  });
}





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
            <img id="dropdown-button" src="/icons/edit.png"  width="18" alt="" style="filter: brightness(0) invert(1); cursor: pointer;">
            <img id="dropdown-button" src="/icons/push-pin.png"  width="18" alt="" style="filter: brightness(0) invert(1); cursor: pointer;">
            <img id="dropdown-button" src="/icons/delete.png"  width="18" alt="" style="filter: brightness(0) invert(1); cursor: pointer;">
          </div>
        </div>
       
    `;

    boardCard.appendChild(noteCard);
    
  });