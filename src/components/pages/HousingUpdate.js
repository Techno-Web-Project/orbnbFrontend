import React from 'react';
import AddConstraintForm from '../constraint_service/AddConstraintForm';
import AddServiceForm from '../constraint_service/AddServiceForm';
import AddCustomConstraintForm from '../constraint_service/AddCustomConstraintForm';
import AddCustomServiceForm from '../constraint_service/AddCustomServiceForm';

function HousingUpdate() {
  return (
    <>
      <AddConstraintForm />
      <AddCustomConstraintForm />
      <AddServiceForm />
      <AddCustomServiceForm />
    </>
  );
}

export default HousingUpdate;