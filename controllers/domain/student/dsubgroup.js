const Dsubgroup = require('../../../models/Domain/Student/Dsubgroup')

async function addDsubgroup(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let dsubgroup = await Dsubgroup.findOne({ value: req.body.value });
        if (dsubgroup) {
            return res.status(400).json({ success, error: "Sorry dsubgroup already exists." })
        }
        // Creating user by using create method of mongoose model
        dsubgroup = await Dsubgroup.create({
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

async function getDsubgroup(req, res) {
    try {
        const dsubgroup = await Dsubgroup.find();
        res.json(dsubgroup);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateDsubgroup(req, res) {
    try {
        let item = await Dsubgroup.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Dsubgroup.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteDsubgroup(req, res) {
    try {
        let item = await Dsubgroup.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Dsubgroup.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addDsubgroup,
    getDsubgroup,
    updateDsubgroup,
    deleteDsubgroup
}