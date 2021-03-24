import React, {Component} from 'react';
import {Title} from './components/Title'
import {SearchForm} from './components/SearchForm'

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  state ={results:[]}

  _handleResults=(results)=> {
    this.setState({results})
  }
  _renderResults() {
    const {results}=this.state
    return results.map(movie=>{
      return <p key={movie.imdbID}>{movie.Title} </p>
    })
  }


  return (
    <div className="App">
      <Title>Search movies</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm onResults= {this_handleResults} />
      </div>
      {this.state.results.length === 0 
        ?<p>Sin resultados </p>
        : this._renderResults()
      }
    </div>
  );
}

export default App;
