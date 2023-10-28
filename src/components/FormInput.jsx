import React from "react";

const FormInput = ({ todo, setTodo, clearInput, inputRef }) => {
  return (
    <div>
      <div className="py-4 flex justify-center ">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onFocus={clearInput}
          ref={inputRef}
          placeholder="What's need to be done?"
          className="input border-none input-ghost w-[220px] sm:w-full max-w-xs bg-slate-100 rounded-full "
        />
        <button
          type="submit"
          className="bg-[#ff4d6d] hover:bg-[#5a1d28] text-white font-bold py-2 px-4 rounded-full "
        >
          create
        </button>
      </div>
    </div>
  );
};

export default FormInput;
