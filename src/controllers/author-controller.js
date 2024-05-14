import { author } from '../models/author.js';

class AuthorController {

    static async getAuthors(req, res) {
        try {
            const authors = await author.find();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to get authors` });
        }
    }

    static async getAuthorById(req, res) {
        try {
            const authorId = req.params.id;
            const authorFound = await author.findById(authorId);
            res.status(200).json(authorFound);
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to get author` });
        }
    }

    static async createAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            await newAuthor.save();
            res.status(201).json({ message: 'Author added', data: newAuthor });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to add author` });
        }
    }

    static async updateAuthor(req, res) {
        try {
            const authorId = req.params.id;
            await author.findByIdAndUpdate(authorId, req.body);
            res.status(200).json({ message: 'Author updated' });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to update author` });
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const authorId = req.params.id;
            await author.findByIdAndDelete(authorId);
            res.status(200).json({ message: 'Author deleted' });
        } catch (error) {
            res.status(500).send({ message: `${error.message} - failure to delete author` });
        }
    }

}

export default AuthorController;