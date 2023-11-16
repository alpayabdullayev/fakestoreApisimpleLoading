import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Cards';

const FakeApiStore = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("http://localhost:3000/posts");
        setData(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((item) => (
            <Card key={item.id} {...item}/>
        ))
      )}
    </>
  );
};

export default FakeApiStore;
