const Dsection = require('../../../models/Dsection')

async function addDsection(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let dsection = await Dsection.findOne({ value: req.body.value });
        if (dsection) {
            return res.status(400).json({ success, error: "Sorry dsection already exists." })
        }
        // Creating user by using create method of mongoose model
        dsection = await Dsection.create({
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

async function getDsection(req, res) {
    try {
        const dsection = await Dsection.find();
        res.json(dsection);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateDsection(req, res) {
    try {
        let item = await Dsection.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Dsection.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteDsection(req, res) {
    try {
        let item = await Dsection.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Dsection.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addDsection,
    getDsection,
    updateDsection,
    deleteDsection
}