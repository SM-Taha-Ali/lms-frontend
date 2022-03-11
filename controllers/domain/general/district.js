const District = require('../../../models/Domain/General/District.js')

async function adddistrict(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let district = await District.findOne({ value: req.body.value });
        if (district) {
            return res.status(400).json({ success, error: "Sorry district already exists." })
        }
        // Creating user by using create method of mongoose model
        district = await District.create({
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

async function getdistrict(req, res) {
    try {
        const district = await District.find();
        res.json(district);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatedistrict(req, res) {
    try {
        let item = await District.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value = req.body.value;
        const label = req.body.label;
        const name = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await District.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function deletedistrict(req, res) {
    try {
        let item = await District.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await District.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    adddistrict,
    getdistrict,
    updatedistrict,
    deletedistrict
}