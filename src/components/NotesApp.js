import React, { Component } from 'react';
import NewNoteForm from './NewNoteForm';
import NotesList from './NotesList';
import './style.css'

export default class NotesApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
    };

    this.getNotes = this.getNotes.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  async getNotes() {
    const array = [];
    await fetch('http://localhost:7070/notes')
      .then(res => res.json())
      .then(result => result.forEach(note => array.push(note)));

    this.setState({
      notesArray: array
    })
  }

  async addNote(evt) {
    evt.preventDefault();

    const noteText = evt.target[0].value;
    
    await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ text: noteText })
    })

    evt.target[0].value = '';

    this.getNotes();
  }

  async deleteNote(evt) {
    if (evt.target.classList.contains('delete-btn')) {
      await fetch(`http://localhost:7070/notes/${evt.currentTarget.id}`, {method: 'DELETE'})
    }
    this.getNotes();
  }

  render() {
    return (
      <div>
        <div className="header__wrapper">
          <h1>Notes<button className="btn update-btn" onClick={this.getNotes}>Update</button></h1>
        </div>
        <NotesList notesArray={this.state.notesArray} getNotes={this.getNotes} deleteNote={this.deleteNote}/>
        <NewNoteForm addNote={this.addNote}/>
      </div>
    )
  }
}