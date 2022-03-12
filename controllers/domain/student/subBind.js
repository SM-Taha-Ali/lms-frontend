const SubBind = require('../../../models/Domain/Student/SubBind')

async function addsubBind(req, res) {
    // Check whether the user with this email already exists
    let success = false
    try {
        const check = await SubBind.findOne({ subject:req.body.subject, group:req.body.group, class:req.body.class, subgroup:req.body.subgroup });
        if (check) { 
            return res.status(400).json({ success, error: "Sorry Subject Bind already exists." })
        }
        // Creating user by using create method of mongoose model
        let subBind = await SubBind.create({
            subject: req.body.subject,
            group: req.body.group,
            class: req.body.class,
            subgroup: req.body.subgroup
        })
        // Sending the user object as a response
        success = true
        res.status(200).json(subBind) 
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

}

async function getsubBind(req, res) {
    try {
        const subBind = await SubBind.find();
        res.json(subBind);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function getsubOnlyBind(req, res) {
    try {
        const subBind = await SubBind.find({ group: req.body.group, subgroup: req.body.subgroup, class:req.body.class });
        res.json(subBind);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updatesubBind(req, res) {
    try {
        let item = await SubBind.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const subject  = req.body.subject;
        const group  = req.body.group;
        const clas = req.body.class;
        const subgroup = req.body.subgroup;
        const newItem = {};
        if (subject) { newItem.subject = subject }
        if (group) { newItem.group = group }
        if (clas) { newItem.clas = clas }
        if (subgroup) { newItem.subgroup = subgroup }
        item = await SubBind.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error") 
    }
}

async function deletesubBind(req, res) {
    try {
        let item = await SubBind.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        item = await SubBind.findByIdAndDelete(req.body.id);
        res.json({ "Success": "Item has been deleted.", item: item });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



module.exports = {
    addsubBind,
    getsubBind,
    getsubOnlyBind,
    updatesubBind,
    deletesubBind
}