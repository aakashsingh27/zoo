import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const handleAuthorize = async () => {
    try {
      // Make a GET request to the /authorize endpoint
const response = await axios.get('https://node-project-rc3o.onrender.com/api/live/authorize');
          console.log(response);
      // Redirect the user to the Zoom authorization URL
      window.location.href = response.request.responseURL;
    } catch (error) {
      console.error('Error authorizing:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAuthorize}>Authorize Zoom</button>
    </div>
  );
};

export default YourComponent;
