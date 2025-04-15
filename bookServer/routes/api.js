import express from 'express';
import Book from '../models/book.js';
import Author from '../models/author.js';
import Genre from '../models/genre.js';

const router = express.Router();

// ----- Authors -----
router.get('/authors', async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});

router.post('/authors', async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.status(201).json(author);
});

router.put('/authors/:id', async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
});

router.delete('/authors/:id', async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// ----- Genres -----
router.get('/genres', async (req, res) => {
  const genres = await Genre.find();
  res.json(genres);
});

router.post('/genres', async (req, res) => {
  const genre = new Genre(req.body);
  await genre.save();
  res.status(201).json(genre);
});

router.put('/genres/:id', async (req, res) => {
  const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(genre);
});

router.delete('/genres/:id', async (req, res) => {
  await Genre.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// ----- Books -----
router.get('/books', async (req, res) => {
  const books = await Book.find().populate('author genre');
  res.json(books);
});

router.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

router.put('/books/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

router.delete('/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
