import './App.css';
import Characters from './components/Characters/Characters';
import { useState, useEffect } from 'react';

function App() {
  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(1)
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then(response => response.json())
      .then(data => setCharacterList(data.results))
      .catch((err) => console.log(err));
  },[next]);

  const previousPage = () => {
    if(next > 1){
      setNext(next-1)
    }else{
      alert(null)
    }
  }

  const nextPage = () => {
    if(next < 34){
      setNext(next + 1)
    }else{
      alert(null)
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList}/>
        <div className='buttons'>
          <button onClick={previousPage}>Anterior</button>
          <button onClick={nextPage}>Próxima</button>
        </div>
      </div>
    </div>
  );
}

export default App;