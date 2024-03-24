import { useEffect, useState } from "react";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/albums")
        .then((response) => response.json())
        .then((data) => setAlbums(data))
        .catch((err) => console.log(err));
    }, []);
    return (
      <div className="display">
        <ul>
          {albums.map((list, index) => (
            <li key={index}>
              {list.id} | {list.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }