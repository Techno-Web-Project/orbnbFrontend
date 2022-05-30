import React from 'react';
import AddConstraintForm from '../constraint_service/AddConstraintForm';
import AddServiceForm from '../constraint_service/AddServiceForm';
import AddCustomConstraintForm from '../constraint_service/AddCustomConstraintForm';
import AddCustomServiceForm from '../constraint_service/AddCustomServiceForm';
import '../HousingUpdate.css';

function HousingUpdate() {
  return (
    <div className="serviceContainer">
      <AddConstraintForm />
      <AddCustomConstraintForm />
      <AddServiceForm />
      <AddCustomServiceForm />
    </div>
  );
}

export default HousingUpdate;
