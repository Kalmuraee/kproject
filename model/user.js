/**
 * Created by khalid on 2/16/17.
 */


//mongoose.connect( 'mongodb://localhost/express' );



var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;



var user = new  Schema({
  name:String,
  username:String,
  age : Number,
  email:String,
  password:String

});

mongoose.model( 'user', user );
