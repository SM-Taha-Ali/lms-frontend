const City = require('../../../models/Domain/General/City.js')

async function addcity(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let city = await City.findOne({ value: req.body.value });
        if (city) {
            return res.status(400).json({ success, error: "Sorry city already exists." })
        }
        // Creating user by using create method of mongoose model
        city = await City.create({
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

async function getcity(req, res) {
    try {
        const city = await City.find();
        res.json(city);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatecity(req, res) {
    try {
        let item = await City.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await City.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deletecity(req, res) {
    try {
        let item = await City.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await City.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addcity,
    getcity,
    updatecity,
    deletecity
}