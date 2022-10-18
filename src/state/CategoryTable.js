import React, { useState } from "react";
import { categories } from "../data/Categories";

function CategoryTable() {
  const [categoryList, setcategoryList] = useState(categories);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [orderNameStatus, setorderNameStatus] = useState(false);

  const removeAll = () => {
    setcategoryList([]);
  };

  const deleteCategory = (id) => {
    let filteredCategories = categoryList.filter((q) => q.id !== id);
    setcategoryList([...filteredCategories]);
  };

  const addNewCategory = () => {
    let categoryId = categoryList[categoryList.length - 1].id + 1;
    let newCategory = {
      id: categoryId,
      name: name,
      description: description,
    };
    setcategoryList([...categoryList, newCategory]);
  };

  const orderByName = () => {
    if (orderNameStatus) {
      setorderNameStatus(false);
      categoryList.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      setorderNameStatus(true);
      categoryList.sort((a, b) => a.name.localeCompare(b.name));
    }
    setcategoryList([...categoryList]);
  };

  return (
    <div>
      <div>
        <div>
          <label>Name: </label>
          <input type="text" onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
          <button onClick={() => addNewCategory()}>Add</button>
        </div>
        <h1>Length: {categoryList.length}</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => orderByName()} style={{ cursor: "pointer" }}>
              Name
            </th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((item, key) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => deleteCategory(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => removeAll()}>Remove all</button>
    </div>
  );
}

export default CategoryTable;
