import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  const instance = axios.create({
    baseURL: 'http://localhost:5000' 
  });
  useEffect(() => {
    instance.get('/map-data')
      .then(response => {
        
        setGoogleMapsApiKey(response.data.googleMapsApiKey);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [instance]);

  
  return (
    <div className="container">
      <h1>About</h1>
      <p>Google Maps API Key: {googleMapsApiKey}</p>
    </div>
  );
};

export default About;