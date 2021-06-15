module.exports = app => {
  var router = require("express").Router();

  router.post("/", (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(req.body, null, 4));
  });

  app.use("/api/examples", router);
};
