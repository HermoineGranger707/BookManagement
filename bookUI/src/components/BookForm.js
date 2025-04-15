import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    summary: '',
    isbn: '',
    genre: '',
    url: ''
  });
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/authors').then(res => setAuthors(res.data));
    axios.get('http://localhost:5000/api/genres').then(res => setGenres(res.data));
  }, []);

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/books', formData).then(() => {
      setFormData({
        title: '',
        author: '',
        summary: '',
        isbn: '',
        genre: '',
        url: ''
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3>Add Book</h3>
      <div className="row mb-3">
        <div className="col">
          <input name="title" value={formData.title} onChange={handleChange} className="form-control" placeholder="Title" required />
        </div>
        <div className="col">
          <select name="author" value={formData.author} onChange={handleChange} className="form-select" required>
            <option value="">Select Author</option>
            {authors.map(a => <option key={a._id} value={a._id}>{a.name}</option>)}
          </select>
        </div>
        <div className="col">
          <select name="genre" value={formData.genre} onChange={handleChange} className="form-select" required>
            <option value="">Select Genre</option>
            {genres.map(g => <option key={g._id} value={g._id}>{g.name}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-3">
        <textarea name="summary" value={formData.summary} onChange={handleChange} className="form-control" placeholder="Summary" required />
      </div>
      <div className="mb-3">
        <input name="isbn" value={formData.isbn} onChange={handleChange} className="form-control" placeholder="ISBN" required />
      </div>
      <div className="mb-3">
        <input name="url" value={formData.url} onChange={handleChange} className="form-control" placeholder="Image URL" />
      </div>
      <button className="btn btn-primary">Add Book</button>
    </form>
  );
}

export default BookForm;
