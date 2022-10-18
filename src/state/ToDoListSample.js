import React, { useState } from "react";

function ToDoListSample() {
  const [todos, settodos] = useState([]);

  //* inputtaki state todoName ile tutulacak
  const [todoName, settodoName] = useState("");

  const addNewTodo = () => {
    let randomId = Math.floor(Math.random() * 1000);

    let newTodo = {
      id: randomId,
      name: todoName,
      completed: false,
    };

    settodos([...todos, newTodo]);
    //* ekleme yaptıktan sonra input temizleme
    settodoName("");
  };

  const todoStatusChange = (id) => {
    let todo = todos.find((q) => q.id === id);
    todo.completed = !todo.completed;
    settodos([...todos]);
  };

  const removeAll = () => {
    settodos([]);
  };

  const updateTodoItem = (value, id) => {
    let todo = todos.find((q) => q.id === id);
    todo.name = value;
    settodos([...todos]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <label>Todo Name</label>
        <input
          type="text"
          value={todoName}
          onChange={(e) => settodoName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => addNewTodo()}>Add</button>
        <button onClick={() => removeAll()}>Remove All</button>
      </div>
      <div>
        <ul>
          {todos &&
            todos.map((item, key) => {
              let style = {
                cursor: "pointer",
              };
              if (item.completed) {
                // style.textDecorationLine = "line-through";
                style.backgroundColor = "green";
              }

              //* önce yapılan
              // return (
              //   <li
              //     style={style}
              //     key={item.id}
              //     onClick={() => todoStatusChange(item.id)}
              //   >
              //     {item.name}
              //   </li>
              // );

              //* sonra yapılan (inputa tıkla düzenle ve butona tıkla)
              return (
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    value={item.name}
                    style={style}
                    onChange={(e) => {
                      updateTodoItem(e.target.value, item.id);
                    }}
                  />
                  <button onClick={() => todoStatusChange(item.id, key)}>
                    Change Status
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoListSample;
