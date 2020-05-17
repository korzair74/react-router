import React, { useState, useEffect }from 'react';
import '../App.css';


function ItemDetail({match}) {

    useEffect(() => {
      fetchItem();
    }, []);

  const [item, setItem] = useState({
    images: {}
  }); 
  
  const fetchItem = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "9f27407c-7040508b-34b272e5-23e556c2");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const fetchItem = await fetch(
      `https://fortniteapi.io/items/get?id=${match.params.id}&lang=en\n`, requestOptions
      );

      const item = await fetchItem.json();
      setItem(item.item);
      console.log(item.item)
    };
  
return (
    <div >
      <h1>
      {item.name}
      </h1>
      <img src={item.images.full_size} alt=""/>
    </div>
  );
}

export default ItemDetail;