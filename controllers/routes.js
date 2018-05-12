const chalk = require( "chalk" )
const log = console.log;
const express = require( 'express' );
const router = express.Router();
const bodyParser = require( "body-parser" );
const path = require( 'path' );
const db = require( "../models" );


router.get( "/", function ( req, res ) {

  db.Shrimp.findAll( {} ).then( function ( menuItems ) {

    let hbsObj = {
      menuItems: menuItems
    }
    res.render( "index", hbsObj )

  } )
} ); //end / route



router.post( "/order", function ( req, res ) {
  console.log( "that's a shrimptastic choice!" );
  log( chalk.blue( `req.body.shrimp is: ${req.body.shrimp_name}` ) )

  db.Shrimp.create( {
    shrimp_name: req.body.shrimp_name,
    spiciness: req.body.spiciness
  }, function ( error, data ) {
    log( chalk.red( data ) )
  } );
} );


module.exports = router;