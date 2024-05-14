import express from 'express';
import bookController from '../controllers/book-controller.js';

const routes = express.Router();

routes.get('/books', bookController.getBooks);
routes.get('/books/editor', bookController.getBooksByEditor);
routes.get('/books/:id', bookController.getBookById);
routes.post('/books', bookController.createBook);
routes.put('/books/:id', bookController.updateBook);
routes.delete('/books/:id', bookController.deleteBook);

export default routes;