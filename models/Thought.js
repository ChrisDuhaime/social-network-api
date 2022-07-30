const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

//Schema only to be used embedded in ThoughtsSchema, not a model
const reactionSchema = new Schema(
    {
    reactionID: {
        type: Schema.Types.ObjectID,
        default: ()=> new Types.ObjectID()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtTime) => moment (createdAtTime).format('MMM DD, YYYY [at] hh:mm')
    }

    },
    {
    toJSON: {
        getters: true
    }
    }    
    
);

const thoughtSchema = new Schema(
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
    reactions: [reactionSchema] //Schema defined above
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)


//creating Virtual field to count reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//Create thoughts model using the schema above
const Thought = model('Thought', thoughtSchema);

//Export model to use in Routes

module.exports = Thought;

