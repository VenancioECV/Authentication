import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APOD = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=rlIYaKbGMQ0REmb5f0IzacY0aTpJzYbnv10Ep3yl')
      .then(response => setApodData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {apodData && <img src={apodData.url} alt={apodData.title} />}
      {apodData && <p>{apodData.title}</p>}
      {apodData && <p>{apodData.explanation}</p>}
    </div>
  );
};

export default APOD;
