import React, { Component } from 'react';

export default class Note extends Component {

  render() {
    return (
      <div id={this.props.id} onClick={this.props.deleteNote}>
        <div className='note-text'>{this.props.text}</div>
        <button className='btn delete-btn'>Del</button>
      </div>
    )
  }
}