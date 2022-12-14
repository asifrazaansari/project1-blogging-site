const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: {
        type: ObjectId,
        ref: "Author",
        required: true
    },
    tags: {
        type: [String],
        default: undefined
    },
    category: [{ type: String, required: true }],
    subcategory: {
        type: [String],
        default: undefined
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

    deletedAt: { type: Date, default: null },
    publishedAt: { type: Date, default: null },

    isPublished: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema)
