const router = require('express').Router()


router.get('/', (req, res) => {
    obj = {
        name : "harry",
        age : 21,
      

    }
    res.json(obj)
 })


 module.exports = router;