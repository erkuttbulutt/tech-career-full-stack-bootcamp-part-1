import React, { useState } from "react";
import { categories } from "../data/Categories";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";

// PARENT COMPONENT
function CategoryPage() {
  //* data/categories'i state'e verdik
  const [categoryList, setcategoryList] = useState(categories);

  //* deleteItem fonksiyonu CategoryTable'dan buraya gönderdik. Çünkü categoryList parent componentde yani burada tanımlı
  const deleteItem = (id) => {
    let filteredCategories = categoryList.filter((q) => q.id !== id);
    setcategoryList([...filteredCategories]);
  };

  const add = (item) => {
    setcategoryList([...categories, item]);
  };

  //* CategoryTable'a yani child componente state'i(categories) gönderdik
  return (
    <div>
      <h1>Category Page</h1>
      <AddCategory add={add}/>
      <CategoryTable categoryList={categoryList} deleteItem={deleteItem} />
    </div>
  );
}

export default CategoryPage;
