import React from "react";

const List = ({
  todos,
  editTodo,
  deleteTodo,
  saveTodo,
  noteRef,
  preventSubmit,
}) => {
  return (
    <div className="pl-[500px] pt-[20px] ">
      {todos.map((todo, inx) => {
        return (
          <section>
            {!todo.isEditing ? (
              <>
                <p className="text-red-700  font-bold ">{todo.text}</p>

                <button onClick={() => editTodo(inx)}>edit</button>
              </>
            ) : (
              <>
                <label
                  htmlFor="task" // better accessibility with HTML
                  className="text-red-700 px-4 font-bold "
                >
                  {todo.text}
                </label>
                <input
                  className="text-green-700 px-4 font-bold "
                  defaultValue={todo.text}
                  ref={(element) => (noteRef.current[inx] = element)}
                  onKeyPress={preventSubmit}
                  id="task"
                />

                <button onClick={() => saveTodo(inx)}>save</button>
              </>
            )}

            <button onClick={() => deleteTodo(inx)} className="pl-4">
              delete
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default List;
