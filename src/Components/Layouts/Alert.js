import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i class="fas fa-keyboard"></i> {alert.message}
      </div>
    )
  );
};

export default Alert;
