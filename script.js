const date = document.getElementById("date");
const inputNote = document.getElementById("notes-input");
const addBtn = document.getElementById("add-btn");
const delBtn = document.getElementById("delete-btn");
const noteList = document.getElementById("note-list");

let notes = [];

const savedNotes = JSON.parse(localStorage.getItem("notes"));

if (savedNotes){
    notes = savedNotes;
    render();
}




addBtn.addEventListener("click",()=> addToList(inputNote.value));

function addToList(noteText){
    if(!noteText.trim()) return;
    notes.push(noteText);
    localStorage.setItem("notes",JSON.stringify(notes));
    render();
    inputNote = "";
}


function render(){
    noteList.innerHTML = "";

    notes.forEach(note => {
        createNoteItem(note);
    });

}


function createNoteItem(noteText){

    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");


    li.classList.add("listed-note");
    span.textContent  = noteText;
    removeBtn.innerHTML = '<i class="far fa-times-circle"></i>';

    removeBtn.classList.add("delete-btn");
    removeBtn.addEventListener("click", ()=> {
        notes = notes.filter(note => note !== noteText);
        localStorage.setItem("notes",JSON.stringify(notes));
        render();
    });
    //No addition of classList required for the span!

    li.appendChild(span);
    li.appendChild(removeBtn);

    noteList.append(li);

}
