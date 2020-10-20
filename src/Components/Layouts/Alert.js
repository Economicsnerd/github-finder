import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i class="fas fa-exclamation-circle"></i> {alert.message}
      </div>
    )
  );
};

export default Alert;
