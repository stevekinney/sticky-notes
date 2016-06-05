import React from 'react';

const NoteControls = ({ x, y, width, height, handleChange }) => {
  return (
    <div className="note-controls">
      <fieldset>
        <label>X</label>
        <input type="number"
              name="x"
              value={x}
              onChange={e => updateNote(e, handleChange)}
        />
      </fieldset>
      <fieldset>
        <label>Y</label>
        <input type="number"
              name="y"
              value={y}
              onChange={e => updateNote(e, handleChange)}
        />
      </fieldset>
      <fieldset>
        <label>Width</label>
        <input type="number"
              name="width"
              value={width}
              onChange={e => updateNote(e, handleChange)}
        />
      </fieldset>
      <fieldset>
        <label>Height</label>
        <input type="number"
              name="height"
              value={height}
              onChange={e => updateNote(e, handleChange)}
        />
      </fieldset>
    </div>
  );
};

const updateNote = (e, handleChange) => {
  handleChange({ [e.target.name]: parseInt(e.target.value, 10) });
};

export default NoteControls;
