const Batch = require('../../../models/Management/Batches/BatchCreate')

async function addbatches(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        let batches = await Batch.findOne({ batchname: req.body.batchname });
        if (batches) {
            return res.status(400).json({ success, error: "Sorry batches already exists." })
        }
        // Creating user by using create method of mongoose model
        batches = await Batch.create({
            batchname: req.body.batchname,
            subteafees: req.body.subteafees,
            students: req.body.students,
            start_date: req.body.start_date,
            end_date: req.body.end_date
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

async function getbatches(req, res) {
    try {
        const batches = await Batch.find();
        res.json(batches);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatebatches(req, res) {
    try {
        let item = await Batch.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const batchname = req.body.batchname;
        const subteafees = req.body.subteafees;
        const students = req.body.students;
        const start_date = req.body.start_date;
        const end_date = req.body.end_date;
        const newItem = {};
        if (batchname) { newItem.batchname = batchname }
        if (subteafees) { newItem.subteafees = subteafees }
        if (students) { newItem.students = students }
        if (start_date) { newItem.start_date = start_date }
        if (end_date) { newItem.end_date = end_date }
        item = await Batch.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function deletebatches(req, res) {
    try {
        let item = await Batch.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await Batch.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addbatches,
    getbatches,
    updatebatches,
    deletebatches
}