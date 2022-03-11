const Religion = require('../../../models/Domain/General/Religion')

async function addReligion(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let country = await Religion.findOne({ value: req.body.value });
        if (country) {
            return res.status(400).json({ success, error: "Sorry country already exists." })
        }
        // Creating user by using create method of mongoose model
        country = await Religion.create({
            value: req.body.value,
            label: req.body.label,
            name: req.body.name
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

async function getReligion(req, res) {
    try {
        const country = await Religion.find();
        res.json(country);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateReligion(req, res) {
    try {
        let item = await Religion.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Religion.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function deleteReligion(req, res) {
    try {
        let item = await Religion.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Religion.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}


module.exports = {
    addReligion,
    getReligion,
    updateReligion,
    deleteReligion
}