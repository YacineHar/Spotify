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
      <div className="nav">
        <ul>
          {artists.map((list, index) => (
          <li className="album-name" onClick={() => redirectToAlbumDetails(randomAlbum.id)}>
          {randomAlbum.name}
        </li>
          ))}
        </ul>
      </div>
    );
  }