const router = require("express").Router();
    
module.exports = router;

router.get(() => {
	res.status(404).send("Sorry, can't find that!");
	res.redirect('/404.html');
});