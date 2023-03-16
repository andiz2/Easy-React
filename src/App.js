import "./styles.css";

const name = "Andrei Dragos";
const date = new Date().getFullYear();
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

export default function App() {
  return (
    <div className="App">
      <h1 contentEditable="true" spellCheck="true" style={customStyle}>
        Lovely header one{" "}
      </h1>
      <ul>
        <li>
          <img
            className="food-img"
            src="https://images.unsplash.com/photo-1598945768336-8d34de50056e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80"
          />{" "}
        </li>
        <li>
          <img
            className="food-img"
            src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80"
          />{" "}
        </li>
        <li>
          <img
            className="food-img"
            src="https://images.unsplash.com/photo-1496285705189-c290050257f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80"
          />{" "}
        </li>
      </ul>
      <p>Created by {name}</p>
      <p>Copyright {date}</p>
    </div>
  );
}
