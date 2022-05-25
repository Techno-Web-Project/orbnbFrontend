import React from 'react';
import './AddHouse.css';

function AddHouse() {
  return (
    <div className="addHouseDiv">
      <h1>Add House</h1>
      <div className="addInput">
        <label>Select File</label>
        <input type="file" name="file" />
      </div>
    </div>
  );
}

export default AddHouse;
