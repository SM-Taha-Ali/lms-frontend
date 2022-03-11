const Area = require('../../../models/Domain/General/Area.js')

async function addarea(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let area = await Area.findOne({ value: req.body.value });
        if (area) {
            return res.status(400).json({ success, error: "Sorry area already exists." })
        }
        // Creating user by using create method of mongoose model
        area = await Area.create({
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

async function getarea(req, res) {
    try {
        const area = await Area.find();
        res.json(area);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatearea(req, res) {
    try {
        let item = await Area.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Area.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deletearea(req, res) {
    try {
        let item = await Area.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Area.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addarea,
    getarea,
    updatearea,
    deletearea
}