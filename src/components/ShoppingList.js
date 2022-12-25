import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [formData, setFormData] = useState({
  //   name:"",
  //   category:"Produce"
  // })
  const [items, setItems] = useState(itemData);
  // const [allData, setAllData] = useState([])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    
  }
  function onSearchChange(event){
    setSearch(event.target.value);
   
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  }).filter((item) => {
    if(search === "") return true;
    return item.name.toLowerCase().includes(search);
  });
  
  function onItemFormSubmit(event){
    event.preventDefault();
    const submittedData={name:event.target[0].value, category:event.target[1].value}
    const submittedDataArray =[...items, submittedData]
    setItems(submittedDataArray);
    
    // const allFormData={name:name,category:category};
    // const allFormDataArray={...item,allFormData};
    // setFormData(allFormDataArray);
  }

  // const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id
  //   name: event.target.value,
  //   category: event.target.value,
  // };

  // function handleFormChange(value){
 
  //   setFormData({
  //     ...formData,
  //     name: value,
  //     category: value,
  //   })

  // }
  
  //  const addItemToList = allData.map((data,index) =>{
  //   return(
  //     <div key={index}>
  //       <li>{data.name} {data.category}</li>
  //     </div>
  //   )
  //  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} /*formData={formData}*/ /*handleFormChange={handleFormChange}*/ />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
       {/* {addItemToList} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
