import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function Main() {
  // const [records, setRecords] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/albums")
  //     .then((response) => response.json())
  //     .then((data) => setRecords(data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="nav">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <ul>
        {records.map((list, index) => (
          <li>
            {list.id} | {list.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Main;
