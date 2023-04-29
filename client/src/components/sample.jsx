import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/achievements')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Achievements</h1>
        {data.map((item, index) => (
          <div>
            <h3 key={index}>{item.title}</h3>
            <p key={index}>{item.content}</p>
          </div>
        ))}
    </div>
  );
}

export default Sample;
