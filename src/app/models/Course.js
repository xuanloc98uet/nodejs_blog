const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all', 
});

module.exports = mongoose.model('Course', Course);
