const button=document.querySelector('button');
const p=document.querySelector('#noteList');
const notes=[];

 button.addEventListener('click',()=>{
        notes.push({note:'' ,editable:true});
        console.log('Notes',notes);
        renderNotes()
 });


 const renderNotes=()=>{
    let html='';
    notes.forEach((note,index)=>{
           
     html +=`${note.editable===true ?`<textarea class='editor' onblur="editNote(this, ${index})">${note.note}</textarea>`:`<p>${note.note}</p>`}` +
     `<button class='edit' onclick="editNotes(${index})">Edit</button>`+
    `<button class='delete' onclick="deleteN(${index})">Delete</button>`
    })
    p.innerHTML=html;

 }

 const editNote=(textareaE1,index)=>{
     notes[index].note=textareaE1.value;
     notes[index].editable=false;

     renderNotes();
 }
  
 const editNotes=(index)=>{
    notes[index].editable=true;
    renderNotes();
 }

 const deleteN=(index)=>{
        if(confirm('Are you sure?')){
            notes.splice(index,1);
            renderNotes();
        }
 }



