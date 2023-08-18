import React from 'react';
import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Biblioteca Mágica de Livrópolis</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
