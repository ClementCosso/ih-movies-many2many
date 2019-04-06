const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {photo: '"""><SCRIPT>alert("XSS")</SCRIPT>">"'});
});

module.exports = router;
