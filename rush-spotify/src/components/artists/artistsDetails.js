import { useEffect, useState } from "react";

export default function Artists() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("http://localhost:8000/artists");
        const data = await response.json();
        setArtists(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchArtists();
  }, []);
  return (
    <div className="display">
      <ul>
        {artists.map((list, index) => (
          <li key={index}>
            <div>
              {list.id} | {list.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
