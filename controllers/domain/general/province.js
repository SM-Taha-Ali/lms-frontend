const Province = require('../../../models/Domain/General/Province.js')

async function addprovince(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let province = await Province.findOne({ value: req.body.value });
        if (province) {
            return res.status(400).json({ success, error: "Sorry province already exists." })
        }
        // Creating user by using create method of mongoose model
        province = await Province.create({
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

async function getprovince(req, res) {
    try {
        const province = await Province.find();
        res.json(province);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateprovince(req, res) {
    try {
        let item = await Province.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value = req.body.value;
        const label = req.body.label;
        const name = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Province.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function deleteprovince(req, res) {
    try {
        let item = await Province.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Province.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addprovince,
    getprovince,
    updateprovince,
    deleteprovince
}