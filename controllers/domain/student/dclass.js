const Dclass = require('../../../models/Dclass')

async function addDclass(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let dclass = await Dclass.findOne({ value: req.body.value });
        if (dclass) {
            return res.status(400).json({ success, error: "Sorry dclass already exists." })
        }
        // Creating user by using create method of mongoose model
        dclass = await Dclass.create({
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

async function getDclass(req, res) {
    try {
        const dclass = await Dclass.find();
        res.json(dclass);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateDclass(req, res) {
    try {
        let item = await Dclass.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Dclass.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteDclass(req, res) {
    try {
        let item = await Dclass.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Dclass.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addDclass,
    getDclass,
    updateDclass,
    deleteDclass
}