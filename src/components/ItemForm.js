import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit,handleFormChange/*,formData*/}) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input /*onChange={(event)=>handleFormChange(event.target.value)}*/ type="text"  /*value={formData.name}*/ />
      </label>

      <label>
        Category:
        <select /*onChange={(event)=>handleFormChange(event.target.value)}*/  /*value={formData.category}*/ >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
