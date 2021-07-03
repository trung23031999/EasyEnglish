const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');
const verifyToken = require('../middlewares/verifyToken');
const Lesson = require('../models/lesson')
const Theory = require('../models/theory');
const Practice = require('../models/practice');

//Get list topic and lesson
router.post('/getLearnPage', verifyToken, async(req, res)=>{
    var listTopic = await Topic.find();
    res.send(listTopic);
})

router.post('/getSlide', verifyToken, async(req, res) => {
    const lesson = await Lesson.findOne({topicId : req.body.topicId, lessonId : req.body.lessonId})
    res.send(lesson.slides)
})

router.post('/getPracticeSlide', verifyToken, async(req, res) => {
    const lesson = await Practice.findOne({topicId : req.body.topicId, lessonId : req.body.lessonId})
    res.send(lesson.slides)
})

module.exports = router;