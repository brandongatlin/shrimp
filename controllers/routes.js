const express = require( 'express' );
const router = express.Router();
const bodyParser = require( "body-parser" );
const path = require( 'path' );
const shrimpModel = require( "../models/shrimp.js" );
const logger = require( "morgan" );

router.get( "/", function ( req, res ) {
  res.send( "hello, world from routes.js" )
} );


module.exports = router;