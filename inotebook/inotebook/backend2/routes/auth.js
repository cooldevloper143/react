const express = require('express');
const User = require('../models/User');
const router = express.Router();


// create a user useing POST "/api/auth/" . doesnt required auth 
router.get('/', (req, res) => {

    const user = User(req.body);
    user.save()

    res.send(req.body)
    
})
// export default router;
module.exports = router;


