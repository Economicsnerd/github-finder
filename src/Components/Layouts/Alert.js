import React, { useContext } from 'react';
import AlertContext from '../../Context/Alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i class="fas fa-keyboard" style={{ marginRight: 10 }}></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
