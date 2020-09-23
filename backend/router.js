const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server instalado e funcionando." }).status(200);
});

module.exports = router;