import React, { useState, useEffect }from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Shop() {

    useEffect(() => {
      fetchItems()
    }, []);

  const [items, setItems] = useState([]); 

  const fetchItems = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "9f27407c-7040508b-34b272e5-23e556c2");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const data = await fetch(
      "https://fortniteapi.io/items/upcoming?lang=en\n", requestOptions
      );

      const items = await data.json();
      console.log(items.items)
      setItems(items.items);

    };
  
return (
    <div >
     {items.map(items => (
       <h1 key={items.id}>
         <Link to={`/shop/${items.id}`}>
         {items.name}
         </Link>
        </h1>
     ))}
    </div>
  );
}

export default Shop;