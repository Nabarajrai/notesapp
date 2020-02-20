const button=document.querySelector('button');
const noteList = document.querySelector("#noteList");

const getLocalStorageNotes = () => {
    return JSON.parse(localStorage.getItem('notes'));
};

const notes = getLocalStorageNotes() || []; 

const updateLocalStorageNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

button.addEventListener('click', () => {
    const newNote = { note: "", editable: true, };
    notes.push(newNote);
    updateLocalStorageNotes(notes);
    renderNotes();
});

const updateNote = (textareaEl, index) => {
    notes[index].note = textareaEl.value;
    notes[index].editable = false;

    updateLocalStorageNotes(notes);
    renderNotes();
};

const renderNotes = () => {
    let html = "";
    notes.forEach((note, index) => {
        html += `${note.editable === true ? ` <textarea placeholder='write your note here!...' class="editor" onblur="updateNote(this, ${index})">${note.note}</textarea>` : 
            `<div>${note.note}</div>`
        }
        <button class='edit' onclick="edit(${index})">Edit</button><button class='delete'  onclick="deleteNote(${index})">Delete</button> `;
        
    });
    noteList.innerHTML = html;
};

const edit = (index) => {
    notes[index].editable = true;
    renderNotes();       
}


const deleteNote =(index)=>{
    if(confirm('Are you sure?')) {
        notes.splice(index, 1);

        updateLocalStorageNotes(notes);
        renderNotes();
    }
}

renderNotes();
