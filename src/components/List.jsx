import React from "react";
import { GoCopy } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
const List = ({
  todos,
  deleteTodo,
  saveTodo,
  noteRef,
  searchTerm,
  setSearchTerm,
  handleCopy,
}) => {
  const SetSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className=" pl-7 ">
      <div className="w-full max-w-sm pb-2 ">
        <div className="flex items-center border-b w-[280px] sm:w-full border-red-500 py-2">
          <input
            onChange={SetSearch}
            className="appearance-none bg-transparent border-none w-full  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="search to-do"
            aria-label="Full name"
          />
        </div>
      </div>

      {todos
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
          return false;
        })
        .map((todo, inx) => {
          return (
            <section className="py-2 pr-9 flex justify-between ">
              <div className="todo_text flex ">
                <p className="text-md text-slate-600 font-bold ">{todo.text}</p>
                <button
                  onClick={() => {
                    handleCopy(todo.text);
                  }}
                  className="px-2"
                >
                  <GoCopy size={20} color="gray" />
                </button>
              </div>
              <div className="todo_btn">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <CiEdit size={20} color="green" />
                </button>
                <button onClick={() => deleteTodo(inx)} className="pl-4">
                  <AiOutlineDelete size={20} color="red" />
                </button>
              </div>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg flex justify-center py-2 ">
                    Edit Your Todo
                  </h3>
                  <div className="flex justify-evenly ">
                    <div className="w-full max-w-sm">
                      <div className="flex items-center border-b border-green-500 py-2">
                        <input
                          defaultValue={todo.text}
                          ref={(element) => (noteRef.current[inx] = element)}
                          id="task"
                          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          placeholder="search to-do"
                          aria-label="Full name"
                        />
                      </div>
                    </div>

                    <button onClick={() => saveTodo(inx)}>
                      <CiSaveDown2 size={30} color="blue" />
                    </button>
                  </div>
                </div>
              </dialog>
            </section>
          );
        })}
    </div>
  );
};

export default List;
