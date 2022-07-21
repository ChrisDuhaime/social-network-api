const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtTime) => moment(createdAtTime).format('MMM DD, YYYY [at] hh:mm')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionsSchema] //Schema defined below
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

//Schema only to be used embedded in ThoughtsSchema, not a model
const ReactionsSchema = new Schema(

)