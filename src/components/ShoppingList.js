import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // const [selectedCatagory, setSelectedCatagory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategoryChange(event){
    // setSelectedCatagory(true)
    setSelectedCategory(event.target.value);
    // notice the value attributes, we grab them by event.target.value
  }
  // selectedCatagory.map(items =>{
  //   items.filter(item =>{
  //     item.selectedCatagory === selectedCatagory ? {...items }
  //   })
  // })
  const itemsToDisplay = items.filter((item => {
      // selectedCategory === "All" ? item.true : item.category === selectedCategory})
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;

    // this filters the items for the ones matching our item category
    // then we need to change the value down in className items to run this function
  }))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
