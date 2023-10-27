import React from "react";

const FormInput = ({
  todo,
  setTodo,
  clearInput,
  inputRef,
  isInputEmpty,
  preventSubmit,
}) => {
  return (
    <div>
      <div className="py-4 flex justify-center ">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onFocus={clearInput}
          ref={inputRef}
          onKeyPress={preventSubmit}
          placeholder="What's need to be done?"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <div className="px-1">
          {!isInputEmpty ? (
            <></>
          ) : (
            <>
              <b>Task can't be empty</b>
            </>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-error"
          onKeyPress={preventSubmit}
        >
          create
        </button>
      </div>
    </div>
  );
};

export default FormInput;
