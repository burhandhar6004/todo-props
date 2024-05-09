import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Listgroup from "./Components/Listgroup";

const App = () => {
  const [todos, settodos] = useState([]);

  // Edit

  const [edit, setEdit] = useState({
    todo: [],
    editmode: false,
  });

  const edittodo = (oldtodo) => {
    setEdit({
      todo: oldtodo,
      editmode: true,
    });
    // console.log(edit);
  };

  // update todo
  const updateTodo = (oldid, text) => {
    console.log(oldid, text);
    settodos(
      todos.map((item) =>
        item.id === oldid ? { id: oldid, text } : item
      )
    );

    setEdit({
      todo: {},
      editmode: false,
    });
  };

  // delte todo
  const deletetodo = (id) => {
    settodos(todos.filter((item) => item.id !== id));
  };

  // add todos

  const addtodos = (adtext) => {
    // console.log(adtext);

    const newtodo = {
      id: crypto.randomUUID(),
      text: adtext,
    };
    // console.log(newtodo);
    settodos([newtodo, ...todos]);
  };

  return (
    <>
      <Navbar />

      <div className="container p-5">
        <Form addtodos={addtodos} edit={edit} updateTodo={updateTodo} />

        <Listgroup
          todos={todos}
          deletetodo={deletetodo}
          edittodo={edittodo}
          edit={edit}
        />
      </div>
    </>
  );
};

export default App;
