import React from "react";
import { useState, useRef, useEffect } from "react";
import FormInput from "./FormInput";
import List from "./List";

const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();
  const noteRef = useRef({});
  const [isInputEmpty, setInputEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    clearInput();
    inputRef.current.focus();
  };

  const preventSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const addTodo = (text) => {
    if (text !== "") {
      const newTodos = [...todos, { text }];
      setNewTodo("");
      setTodos(newTodos);
      StoreTodo([...newTodos]);
    } else {
      console.log("text", text);
      setInputEmpty(true);
    }
  };

  const removeTodo = (inx) => {
    const newArr = [...todos];
    newArr.splice(inx, 1);
    setTodos(newArr);
    StoreTodo([...newArr]);
  };

  const editTodo = (inx) => {
    const newTodos = [...todos];
    newTodos[inx].isEditing = !newTodos[inx].isEditing;
    setTodos(newTodos);
    StoreTodo([...newTodos]);
  };

  const saveTodo = (inx) => {
    const newTodos = [...todos];
    newTodos[inx].isEditing = !newTodos[inx].isEditing;
    newTodos[inx].text = noteRef.current[inx].value;
    setTodos(newTodos);
    StoreTodo([...newTodos]);
  };

  const clearInput = () => {
    setNewTodo("");
  };

  const setTodo = (todo) => {
    setInputEmpty(false);
    setNewTodo(todo);
  };

  const StoreTodo = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const loadTasks = () => {
    let loadedTasks = localStorage.getItem("todo");
    let todos = JSON.parse(loadedTasks);

    if (todos) {
      setTodos(todos);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [todos]);

  return (
    <div className="Form">
      <h1 className="text-[50px] font-bold flex justify-center py-2 text-[red]  ">
        Todo List
      </h1>
      <br />
      <form onSubmit={handleSubmit} className="form">
        <FormInput
          todo={newTodo}
          setTodo={setTodo}
          clearInput={clearInput}
          inputRef={inputRef}
          idInputEmpty={isInputEmpty}
          preventSubmit={preventSubmit}
        />

        <List
          todos={todos}
          editTodo={editTodo}
          deleteTodo={removeTodo}
          saveTodo={saveTodo}
          noteRef={noteRef}
          preventSubmit={preventSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
