import React, { Component } from 'react';
import StickyNote from './sticky-note';

export default class StickyNotes extends Component {
  constructor() {
    super();
    this.state = {
      note: {
        x: 100,
        y: 100,
        width: 400,
        height: 300,
      },
    };
  }

  updateNote(newNote) {
    const note = Object.assign(this.state.note, newNote);
    this.setState({ note });
  }

  render() {
    return (
      <section className="sticky-notes">
        <StickyNote {...this.state.note} handleChange={(e) => this.updateNote(e)}/>
      </section>
    );
  }
}
