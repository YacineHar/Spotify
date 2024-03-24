import { useEffect, useState } from "react";

export default function Artists() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/artists")
        .then((response) => response.json())
        .then((data) => setArtists(data))
        .catch((err) => console.log(err));
    }, []);
    return (
      <div className="display">
        <ul>
          {artists.map((list, index) => (
            <li key={index}>
              {list.id} | {list.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }