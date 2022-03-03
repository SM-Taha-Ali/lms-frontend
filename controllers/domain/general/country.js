const Country = require('../../../models/Country')

async function addCountry(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let country = await Country.findOne({ value: req.body.value });
        if (country) {
            return res.status(400).json({ success, error: "Sorry country already exists." })
        }
        // Creating user by using create method of mongoose model
        country = await Country.create({
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

async function getCountry(req, res) {
    try {
        const country = await Country.find();
        res.json(country);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateCountry(req, res) {
    try {
        let item = await Country.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const value  = req.body.value;
        const label  = req.body.label;
        const name  = req.body.name;
        const newItem = {};
        if (value) { newItem.value = value }
        if (label) { newItem.label = label }
        if (name) { newItem.name = name }
        item = await Country.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deleteCountry(req, res) {
    try {
        let item = await Country.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Country.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addCountry,
    getCountry,
    updateCountry,
    deleteCountry
}