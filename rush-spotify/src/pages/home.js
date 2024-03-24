import { useEffect, useState } from "react";
import "./home.css";

export default function Random() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.log(err));
  }, []);
  let randomArray = [];
  while (randomArray.length <= 30 && albums.length > 0) {
    let rand = albums[Math.floor(Math.random() * 100)];
    randomArray.push(rand);
  }
  return (
    <div className="display">
      {randomArray && randomArray.length > 0 ? (
        <div>
          <ul>
            {randomArray.map((rand, index) => (
              <li key={index}>
                {rand.name}
                <img className="cover" src={rand.cover_small}></img>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="Chargement">Loading...</div>
      )}
    </div>
  );
}
