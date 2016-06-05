import React, { Component } from 'react';
import NoteControls from '../note-controls';
import startMoving from './note-dragging';

export default class StickyNote extends Component {
  constructor() {
    super();
    this.state = {
      moving: false,
    };
  }

  render() {
    const classList = `sticky-note ${this.state.moving ? 'moving' : ''}`;

    const position = {
      top: this.props.y,
      left: this.props.x,
      width: this.props.width,
      height: this.props.height,
    };

    return (
      <article className={classList}
          style={position}
          onMouseDown={startMoving.bind(this)}
          ref={c => this._element = c}>
          <div class="sticky-note--body"></div>
          <footer class="sticky-note--footer">
            <NoteControls {...this.props}/>
          </footer>
      </article>
    );
  }
}
