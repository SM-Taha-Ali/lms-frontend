const Bloodgroup = require('../../../models/Domain/General/bloodgroup.js')

async function addbloodgroup(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let bloodgroup = await Bloodgroup.findOne({ value: req.body.value });
        if (bloodgroup) {
            return res.status(400).json({ success, error: "Sorry bloodgroup already exists." })
        }
        // Creating user by using create method of mongoose model
        bloodgroup = await Bloodgroup.create({
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

async function getbloodgroup(req, res) {
    try {
        const bloodgroup = await Bloodgroup.find();
        res.json(bloodgroup);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatebloodgroup(req, res) {
    try {
        let item = await Bloodgroup.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Bloodgroup.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deletebloodgroup(req, res) {
    try {
        let item = await Bloodgroup.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Bloodgroup.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addbloodgroup,
    getbloodgroup,
    updatebloodgroup,
    deletebloodgroup
}