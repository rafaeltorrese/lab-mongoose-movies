const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const celebritySchema = new Schema(
    {
	name:String,
	occupation:{
	    type:String,
	    default:"unknown",
	},
	catchPhrase:{
	    type:String,
	    required:true,
	},
	
    }
);

module.exports = mongoose.model("Celebrity",celebritySchema);



