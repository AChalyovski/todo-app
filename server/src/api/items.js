const express = require('express');

const router = express.Router();

const items = [
    {id: "1", name: "To this", completed: false},
    // {id: "2", name: "To this2", completed: false},
    // {id: "3", name: "To this3", completed: false},
    // {id: "4", name: "To this4", completed: false},
]

router.get('/', (req, res) => {
    res.json({
        items,
    });
});

module.exports = router;