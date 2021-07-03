const mongoose = require('mongoose')

const exLessonSchema = mongoose.Schema({
    exTopicId : Number,
    exLessonId : Number,
    exLessonNameVn : String,
    exLessonNameEn : String,
    type : String,
    maxScore : {type : Number, default : 70},
    minScore : {type : Number, default : 40},
    slides : {type : [], default : []}
})

module.exports = mongoose.model('exlesson', exLessonSchema)