var express = require("express");
var router = express.Router();
const request = require('request');

const app = express();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

router.get("/", function(req, res, next) {
    request(
        { url: 'https://www.ssense.com/en-ca/men/product/erl/off-white-french-terry-hoodie/5500411' },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: error.message });
          }
    
          res.json(JSON.parse(body));
        }
      )
});

module.exports = router;