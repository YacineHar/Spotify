import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Artists() {
  const { id } = useParams();
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`http://localhost:8000/artists/${id}`);
        const data = await response.json();
        setArtist(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchArtist();
  }, []);
  return (
    <div className="display">
      {artist && (
        <div className="detailsArtist">
          <div>{artist.name}</div>
          <div>{artist.bio}</div>
          <div>{artist.description}</div>
          <img src={artist.photo}></img>
        </div>
      )}
    </div>
  );
}
