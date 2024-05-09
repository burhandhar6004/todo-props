import React, { useEffect, useState } from "react";

const Form = ({ addtodos, edit, updateTodo }) => {
  const [text, settext] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editmode) {
      updateTodo(edit.todo.id, text );
    }else{
      addtodos(text)
    }
    settext("");
  };

  useEffect(() => {
    settext(edit.todo.text);
  }, [edit]);

  return (
    <form className=" my-5" onSubmit={(e) => handlesubmit(e)}>
      <input
        placeholder="Enter Text"
        className="rounded-0 w-100 form-control"
        onChange={(e) => settext(e.target.value)}
        value={text}
      />
      <button className="btn btn-success w-100 rounded-0 my-2 ">
        Add Task
      </button>
    </form>
  );
};

export default Form;
