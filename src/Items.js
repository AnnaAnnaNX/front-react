import './App.css';
import React, {useEffect} from "react";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = React.useState([])

  useEffect(() => {
    fetch('https://shopbackendforreact.azurewebsites.net/api/items')
        .then(res => res.json())
        .then(data => setItems(data))
  }, []);

  return (
      <div>
        {items && items.map(item => (
            <Item key={item.id} item={item} />
        ))}
      </div>
  )
}

export default Items;
