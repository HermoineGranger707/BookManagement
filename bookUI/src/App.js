import React from 'react';
import Header from './components/Header';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="container mt-3">
      <Header />
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
