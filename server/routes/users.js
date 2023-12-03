const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      username: "Tony",
      age: 49
    }
  ])
});

module.exports = router;
