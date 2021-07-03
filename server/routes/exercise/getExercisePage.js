const express = require('express');
const router = express.Router();
const ExTopic = require('../../models/exercise/exTopic');
const verifyToken = require('../../middlewares/verifyToken');
const ExLesson = require('../../models/exercise/exLesson');
const LearnProcess = require('../../models/learnProcess');

//Get list exercise topic and lesson
router.post('/getExercisePage', verifyToken, async(req, res) => {
    var listExTopic = await ExTopic.find();
    res.send(listExTopic);
})

router.post('/getLessonSlide', verifyToken, async(req, res) => {
    var lesson = await ExLesson.findOne({exTopicId : req.body.exTopicId, exLessonId : req.body.exLessonId})
    res.send(lesson.slides)
})

router.post('/finishExerciseLesson', verifyToken, async(req, res) => {
    var diffScore = req.body.newScore - req.body.currentScore;
    if (diffScore > 0) {
        if (req.body.currentScore < req.body.minScore && req.body.newScore >= req.body.minScore) {
            try {
                var scoreField = "exerciseProcess." + (req.body.exTopicId -1) + "." + (req.body.exLessonId -1)
                await LearnProcess.findOneAndUpdate({username : req.body.username}, {$set : {[scoreField] : req.body.newScore}},  {new : true})
                await LearnProcess.findOneAndUpdate({username : req.body.username}, {$inc : {totalScore : diffScore}}, {new : true})
                await LearnProcess.findOneAndUpdate({username : username}, {$inc : {"lastStreak.5" : 1}}, {new : true})
                res.send("success")
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                var scoreField = "exerciseProcess." + (req.body.exTopicId -1) + "." + (req.body.exLessonId -1)
                await LearnProcess.findOneAndUpdate({username : req.body.username}, {$set : {[scoreField] : req.body.newScore}},  {new : true})
                await LearnProcess.findOneAndUpdate({username : req.body.username}, {$inc : {totalScore : diffScore}}, {new : true})
                res.send("success")
            } catch (error) {
                console.log(error)
            }
        }
    }

    try {
        await LearnProcess.findOneAndUpdate({username : req.body.username}, {$set : {"currentLesson.exTopicId" : req.body.exTopicId, "currentLesson.exLessonId" : req.body.exLessonId}}, {new : true})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;