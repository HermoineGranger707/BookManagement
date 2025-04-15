import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h3>Book List</h3>
      <ul className="list-group">
        {books.map(book => (
          <li className="list-group-item" key={book._id}>
            <strong>{book.title}</strong> by {book.author?.name} [{book.genre?.name}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
