const Examdomain = require('../../../models/Domain/Exam/Examdomain.js')

async function addexamdomain(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let examdomain = await Examdomain.findOne({ value: req.body.value });
        if (examdomain) {
            return res.status(400).json({ success, error: "Sorry examdomain already exists." })
        }
        // Creating user by using create method of mongoose model
        examdomain = await Examdomain.create({
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

async function getexamdomain(req, res) {
    try {
        const examdomain = await Examdomain.find();
        res.json(examdomain);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateexamdomain(req, res) {
    try {
        let item = await Examdomain.findById(req.body.id);
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
        item = await Examdomain.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteexamdomain(req, res) {
    try {
        let item = await Examdomain.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Examdomain.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addexamdomain,
    getexamdomain,
    updateexamdomain,
    deleteexamdomain
}