import React from 'react';
import AddHouse from '../AddHouse';

function AddPage(props) {
  return (
    <>
      <AddHouse connectedId={props.connectedId} />
    </>
  );
}

export default AddPage;
