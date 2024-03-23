import { useEffect, useState } from "react";

export default function Genres() {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/genres")
        .then((response) => response.json())
        .then((data) => setGenres(data))
        .catch((err) => console.log(err));
    }, []);
    return (
      <div className="nav">
        <ul>
          {genres.map((list, index) => (
            <li>
              {list.id} | {list.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  