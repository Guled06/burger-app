const express = require("express");

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/foods", (req, res) => {
  burger.create({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// using put to replace the value of sleepy for a
// specific cat resource
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Add a `/api/cats/:id` delete route which calls the delete method of the cat
// model to delete the cat resource with the given id url parameter.
// ... CODE HERE ...

// Export routes for server.js to use.
module.exports = router;
