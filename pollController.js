const Poll = require('./Poll');

exports.createPollGetController = (req, res, next) => {
    res.render('create')


}

exports.createPollPostController = async (req, res, next) => {
    let { title, description, options } = req.body;
    options = options.map(option => {
        return {
            name: option,
            votes: 0
        }
    });
    let poll = new Poll({
        title,
        description,
        options,
    });

    try {
        await poll.save();
        res.redirect('./polls')
    }
    catch (err) {
        console.log(err);
    }
    // res.render('create');

}

exports.getAllPolls = async (req, res, next) => {
    try {
        let polls = await Poll.find();
        res.render('polls', { polls });
    }
    catch (err) {
        console.log(err);
    }
}

exports.viewPollGetController = async (req, res, next) => {
    let id = req.params.id;
    try {
        let poll = await Poll.findById(id);
        let result = [];
        poll.options.forEach(option => {
            let percentage = (option.votes * 100) / poll.totalVotes;
            result.push({
                ...option._doc,
                percentage: percentage ? percentage : 0
            });
        });
        res.render('viewPoll', { poll, result });
    } catch (err) {
        console.log(err);
    }
};


exports.votePollPostController = async (req, res, next) => {
    let id = req.params.id;
    let optionId = req.body.option;

    try {
        let poll = await Poll.findById(id);
        let options = [...poll.options];

        let index = options.findIndex(option => option._id.toString() === optionId);
        options[index].votes += 1;
        let totalVotes = poll.totalVotes + 1;

        await Poll.findOneAndUpdate(
            { _id: poll._id },
            { $set: { options, totalVotes } }
        );
        res.redirect(`/polls/${id}`);
    } catch (err) {
        console.log(err);
    }
};
