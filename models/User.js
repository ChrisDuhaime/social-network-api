const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //figure out matching email prob using regex later.
        },
        thoughts: [{
            type: Schema.Types.ObjectId, //we can .populate these fields in our routes and access them
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,  //we can .populate these fields in our routes and access them
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false

    }
)
//creating a virtual field
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})
//defining model as Users variable
const User = model('User', userSchema);
// Allows Exporting
module.exports = User; 