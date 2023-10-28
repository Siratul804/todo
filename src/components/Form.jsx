import React from "react";
import { useState, useRef, useEffect } from "react";
import FormInput from "./FormInput";
import List from "./List";

const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef();
  const noteRef = useRef({});

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("added to clipboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    clearInput();
    inputRef.current.focus();
  };

  const addTodo = (text) => {
    if (text !== "") {
      const newTodos = [...todos, { text }];
      setNewTodo("");
      setTodos(newTodos);
      StoreTodo([...newTodos]);
    } else {
      console.log("text", text);
    }
  };

  const removeTodo = (inx) => {
    const newArr = [...todos];
    newArr.splice(inx, 1);
    setTodos(newArr);
    StoreTodo([...newArr]);
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
  }, []);

  return (
    <div className="Form bg-white h-[60vh] rounded-lg w-[340px] sm:w-[450px] sm:h-[80vh] drop-shadow-lg ">
      <h1 className="text-[25px] font-bold  text-[black] pt-5 pl-6 ">
        To-do List 📑
      </h1>

      <form onSubmit={handleSubmit} className="form">
        <FormInput
          todo={newTodo}
          setTodo={setTodo}
          clearInput={clearInput}
          inputRef={inputRef}
        />

        <List
          todos={todos}
          deleteTodo={removeTodo}
          saveTodo={saveTodo}
          noteRef={noteRef}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleCopy={handleCopy}
        />
      </form>
    </div>
  );
};

export default Form;
