import { Component } from 'react';
import Note from './Note';

export default class NotesList extends Component {
  
  componentDidMount() {
    this.props.getNotes()
  }

  render() {
    if (this.props.notesArray.length < 1) {
      return  null;
    }

    return (
      <div className='notes-list'>
        {this.props.notesArray.map(note => <Note key={note.id} {...note} deleteNote={this.props.deleteNote} />)}
      </div>
    )
  }
}