const express = require("express");
const Location = require("./location");

const router = express.Router();

router.get("/locations", async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});

router.post("/locations", async (req, res) => {
    const location = new Location(req.body);
    await location.save();

    res.json(location);
});

router.patch("/locations/:id", async (req, res) => {
    const location = await Location.findByIdAndUpdate(
        req.params.id,
        {
            ...req.body,
            updatedAt: new Date()
        },
        { new: true }
    );

    res.json(location);
});

module.exports = router;