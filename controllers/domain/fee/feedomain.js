const Feedomain = require('../../../models/Domain/Fee/Feedomain')

async function addFeedomain(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let feedomain = await Feedomain.findOne({ value: req.body.value });
        if (feedomain) {
            return res.status(400).json({ success, error: "Sorry feedomain already exists." })
        }
        // Creating user by using create method of mongoose model
        feedomain = await Feedomain.create({
            value: req.body.value,
            label: req.body.label,
            name: req.body.name,
            type: req.body.type
        })
        // Sending the user object as a response
        success = true
        res.json(success);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(success, error)
    }

}

async function getFeedomain(req, res) {
    try {
        const feedomain = await Feedomain.find();
        res.json(feedomain);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateFeedomain(req, res) {
    try {
        let item = await Feedomain.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const type  = req.body.type;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        if (type) { newItem.type = type }
        item = await Feedomain.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteFeedomain(req, res) {
    try {
        let item = await Feedomain.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Feedomain.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addFeedomain,
    getFeedomain,
    updateFeedomain,
    deleteFeedomain
}