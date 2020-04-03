import React, {useState, useEffect} from 'react'
import './App.css'
import { Cards } from './components/Cards'
import { Header } from './components/Header'


function App() {
  const [filmes, setFilmes] = useState([])
  useEffect(() => {
    receiveApi()
  }, [])

  const receiveApi = () => {
    const URL_TO_FETCH = 'https://ghibliapi.herokuapp.com/films';
    fetch(URL_TO_FETCH)
      .then(response => response.json())
          .then(data => {
              setFilmes(data)
          })
          .catch(error => console.log(error))
        }
  
// console.log(filmes)

  return (

    <div className="App">
      <Header />
      
        {filmes.map(({title, description}) => (
          <Cards title={title} description={description} />
      
      ))}
    </div>
    
  )
}



export default App
