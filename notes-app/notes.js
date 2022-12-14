const fs= require('fs')

const addNote = (title,body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
        

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })


     if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)
    console.log('New note added')
}else{
    console.log('Note title taken')
}
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    
    if(notes.length > notesToKeep.length){
        console.log('notes removed')
        saveNotes(notesToKeep)
    }else{
        console.log('no note  removed')

    }
}
const listNotes = () => {
    const notes = loadNotes()
    console.log('Your Notes')
    notes.forEach((note) => {
        console.log(note.title)
        

    })


}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(note.title)
        console.log(note.body)


    }else{
        console.log('note not found')

    }

}




const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = () => {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e){
        return[]

    }

}

module.exports = {
    
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}