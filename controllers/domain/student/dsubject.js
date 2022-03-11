const Dsubject = require('../../../models/Domain/Student/Dsubject')

async function addDsubject(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let dsubject = await Dsubject.findOne({ value: req.body.value });
        if (dsubject) {
            return res.status(400).json({ success, error: "Sorry dsubject already exists." })
        }
        // Creating user by using create method of mongoose model
        dsubject = await Dsubject.create({
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

async function getDsubject(req, res) {
    try {
        const dsubject = await Dsubject.find();
        res.json(dsubject);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateDsubject(req, res) {
    try {
        let item = await Dsubject.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Dsubject.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteDsubject(req, res) {
    try {
        let item = await Dsubject.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Dsubject.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addDsubject,
    getDsubject,
    updateDsubject,
    deleteDsubject
}