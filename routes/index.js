const express = require('express');
const router = express.Router();

const bookmark = require('./bookmark');
const tags = require('./tags');


//BOOKMARK APIS
router.post('/addBookmark',bookmark.addBookmark);
router.delete('/delBookmark',bookmark.delBookmark);
router.get('/allBookmark',bookmark.getallBookmarks);


//TAG APIS
router.post('/createTag',tags.createTag);
router.post('/addTag',tags.addTag);
router.get('/allTags',tags.getallTags);
router.delete('/delTag',tags.delTag);
router.delete('/removeTag',tags.removeTag);


module.exports = router;