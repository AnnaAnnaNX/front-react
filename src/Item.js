import './App.css';
import React, {useEffect} from "react";

const Item = ({item}) => {

  return (
      <div>
          {item && <div>
            <h6>{item.title} - {item.price}$</h6>
            <p>{item.description}</p>
          </div>
          }
      </div>
  )
}

export default Item;
