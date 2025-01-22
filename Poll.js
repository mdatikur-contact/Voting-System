const {Schema, model} = require('mongoose');
const PollSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    totalVotes: {
        type: Number,
        default: 0,
    },
    options :[
        {
            name: String,
            votes: Number,
        }
    ]
});


const Poll = model('Poll', PollSchema);
module.exports = Poll;