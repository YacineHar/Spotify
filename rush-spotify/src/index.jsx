import reportWebVitals from "./reportWebVitals";
import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Albums from './components/albums/albums.js'
import AlbumsDetails from './components/albums/albumsDetails.js'
import Artists from './components/artists/artists.js'
import ArtistsDetails from './components/artists/artistsDetails.js'
import Genres from './components/genres/genres.js'
import GenresDetails from './components/genres/genresDetails.js'
import Random  from './pages/home.js'
import Header from './components/header/index.jsx'
import ArtistDetails from './components/artists/artistDetails.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Random />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
