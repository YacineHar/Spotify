import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [records, setRecords] = useState([])
    useEffect(() =>{
      fetch('http://localhost:8000/albums')
      .then(response => response.json())
      .then(data => setRecords( data))
      .catch(err => console.log(err))
    }, [])
  return (
    
      <div className="nav">

        <ul>
            {records.map((list, index) =>(
              <li>{list.id} | {list.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;