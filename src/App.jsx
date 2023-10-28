import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <main className="bg-gradient-to-br from-red-900 via-black to-black flex flex-wrap justify-evenly h-[150vh] sm:h-[100vh]  ">
      <div>
        <h1 className="text-[30px] text-center sm:text-[40px] text-[white] pt-[50px] sm:pt-[100px] font-bold ">
          Create, Edit, Store <br /> & Find
          <span className="text-[#ff4d6d]"> To-Do </span> List <br />
        </h1>
        <img
          src="/todo.svg"
          height="350px"
          width="350px"
          alt=""
          className="py-4"
        />
      </div>
      <div className="pt-[10px] sm:pt-[60px]">
        <Form />
      </div>
    </main>
  );
}

export default App;
