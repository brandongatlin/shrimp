const express = require( 'express' );
const router = express.Router();
const bodyParser = require( "body-parser" );
const path = require( 'path' );
// const shrimpModel = require( "../models/shrimp.js" );
const db = require( "../models" );


const logger = require( "morgan" );

router.get( "/", function ( req, res ) {
  res.render( "index" )
} );

router.post( "/order", function ( req, res ) {
  console.log( "that's a shrimptastic choice!" );
  console.log( "req.body shrimp is:", req.body.shrimp_name );
  db.Shrimp.create( {
    shrimp_name: req.body.shrimp_name,
    spiciness: req.body.spiciness
  }, function ( error, data ) {
    console.log( "created data:", data );
  } );
} );


module.exports = router;