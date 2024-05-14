import mongoose from 'mongoose';
import { authorSchema } from './author';

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    editor: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author: authorSchema
}, { versionKey: false });

const book = mongoose.model('Book', bookSchema);

export default book;