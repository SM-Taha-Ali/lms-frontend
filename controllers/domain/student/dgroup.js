const Dgroup = require('../../../models/Dgroup')

async function addDgroup(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let dgroup = await Dgroup.findOne({ value: req.body.value });
        if (dgroup) {
            return res.status(400).json({ success, error: "Sorry dgroup already exists." })
        }
        // Creating user by using create method of mongoose model
        dgroup = await Dgroup.create({
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

async function getDgroup(req, res) {
    try {
        const dgroup = await Dgroup.find();
        res.json(dgroup);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateDgroup(req, res) {
    try {
        let item = await Dgroup.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Dgroup.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteDgroup(req, res) {
    try {
        let item = await Dgroup.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Dgroup.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addDgroup,
    getDgroup,
    updateDgroup,
    deleteDgroup
}