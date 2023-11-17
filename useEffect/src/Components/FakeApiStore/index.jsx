import React, { useState } from 'react';
import Card from '../Cards';
import UseFetch from '../UseFetch';

const FakeApiStore = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false)

  const url = 'http://localhost:3000/posts';

  const Callback = (data) => {
    if(!status){
      console.log(data);
      setData(data);
      setStatus(true)
    }


  };

  UseFetch(url, Callback);

  return (
    <>
      {data &&
        data.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        ))}
    </>
  );
};

export default FakeApiStore;
