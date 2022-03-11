const Mother_tng = require('../../../models/Domain/General/Mother_tng.js')

async function addmother_tng(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let mother_tng = await Mother_tng.findOne({ value: req.body.value });
        if (mother_tng) {
            return res.status(400).json({ success, error: "Sorry mother_tng already exists." })
        }
        // Creating user by using create method of mongoose model
        mother_tng = await Mother_tng.create({
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

async function getmother_tng(req, res) {
    try {
        const mother_tng = await Mother_tng.find();
        res.json(mother_tng);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatemother_tng(req, res) {
    try {
        let item = await Mother_tng.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Mother_tng.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deletemother_tng(req, res) {
    try {
        let item = await Mother_tng.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Mother_tng.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addmother_tng,
    getmother_tng,
    updatemother_tng,
    deletemother_tng
}