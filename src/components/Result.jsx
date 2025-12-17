import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const userData = JSON.parse(sessionStorage.getItem('userData')) || {};
  const { firstName, lastName } = userData;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // navigate back to the form page
  };

  return (
    <div style={{ padding: '20px' }}>
      {firstName && lastName ? (
        <>
          <h2>
            User has submitted the following information:
            <br />
            <p>First Name: </p> {firstName}
            <br />
            <p>Last Name: </p> {lastName}
          </h2>
          <button onClick={handleGoBack} style={{ marginTop: '20px' }}>
            Go Back
          </button>
        </>
      ) : (
        <>
          <h2>No data submitted.</h2>
          <button onClick={handleGoBack} style={{ marginTop: '20px' }}>
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default Result;
