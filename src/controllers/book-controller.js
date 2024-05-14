import { author } from '../models/author.js';
import book from '../models/book.js';

class BookController {

    static async getBooks(req, res) {
        try {
            const books = await book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to get books` });
        }
    }

    static async getBookById(req, res) {
        try {
            const bookId = req.params.id;
            const bookFound = await book.findById(bookId);
            res.status(200).json(bookFound);
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to get book` });
        }
    }

    static async getBooksByEditor(req, res) {
        try {
            const editor = req.params.editor;
            const booksFound = await book.find({ editor });
            res.status(200).json(booksFound);
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to get books` });
        }
    }

    static async createBook(req, res) {
        const newBook = req.body;
        try {
            const authorFound = await author.findById(newBook.author.id);
            if (!authorFound) {
                res.status(404).send({ message: 'Author not found' });
                return;
            }
            const completeBook = { ...newBook, author: { ...authorFound._doc } };
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: 'Book added', data: createdBook });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to add book` });
        }
    }

    static async updateBook(req, res) {
        try {
            const bookId = req.params.id;
            await book.findByIdAndUpdate(bookId, req.body);
            res.status(200).json({ message: 'Book updated' });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to update book` });
        }
    }

    static async deleteBook(req, res) {
        try {
            const bookId = req.params.id;
            await book.findByIdAndDelete(bookId);
            res.status(200).json({ message: 'Book deleted' });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to delete book` });
        }
    }

}

export default BookController;