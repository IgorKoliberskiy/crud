import React, { Component } from 'react';

export default class NewNoteForm extends Component {
  
  render() {
    return (
      <form className="note-form" onSubmit={this.props.addNote}>
        <textarea required></textarea>
        <button type="submit" className='btn add__btn'>Add</button>
      </form>
    )
  }
}