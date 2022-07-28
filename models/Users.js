const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
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
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,  //we can .populate these fields in our routes and access them
            ref: 'Users'
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
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})
//defining model as Users variable
const Users = model('Users', UsersSchema);
// Allows Exporting
module.exports = Users; 