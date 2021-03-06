const express = require("express")
const router = express.Router();
const Celebrity = require("../models/Celebrity")

router.get("/celebrities" ,(request, response) => {
    Celebrity.find()
	.then(celebrities => {
	    response.render("celebrities/index" , {celebrities})
	})
	.catch(error => {
	    console.log(error);
	})
});


router.get("/celebrities/:id",(request, response) => {
    const {id} = request.params;
    Celebrity.findById(id)
	.then(celebrity=>{
	    response.render("celebrities/show",celebrity)
	})
})


router.post("/celebrities" ,(request,response) =>{
    Celebrity.create(request.body)
	.then(()=>{
	    response.redirect("/celebrities")
	})
	.catch(()=>{
	    response.render("celebrities/new")
	})
})


module.exports = router;

