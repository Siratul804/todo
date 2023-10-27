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
    <div>
      {todos.map((todo, inx) => {
        return (
          <section>
            {!todo.isEditing ? (
              <>
                <input value={todo.text} />
                <button onClick={() => editTodo(inx)}>edit</button>
              </>
            ) : (
              <>
                <label
                  htmlFor="task" // better accessibility with HTML
                  className="visuallyhidden"
                >
                  {todo.text}
                </label>
                <input
                  className="form__edit-input"
                  defaultValue={todo.text}
                  ref={(element) => (noteRef.current[inx] = element)}
                  onKeyPress={preventSubmit}
                  id="task"
                />

                <button
                  onClick={() => saveTodo(inx)}
                  edge="end"
                  aria-label="delete"
                >
                  save
                </button>
              </>
            )}

            <button onClick={() => deleteTodo(inx)}>delete</button>
          </section>
        );
      })}
    </div>
  );
};

export default List;
