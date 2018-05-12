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
  // log( chalk.blue( `req.body.spiciness is: ${req.body.spiciness}` ) )

  db.Shrimp.create( {
    shrimp_name: req.body.shrimp_name,
    spicy: req.body.spiciness
  }, function ( error, data ) {
    log( chalk.red( data ) )
  } );
  res.redirect( "/" )
} );

router.get( "/boss", function ( req, res ) {
  db.Shrimp.findAll( {} ).then( function ( menuItems ) {

    let hbsObj = {
      menuItems: menuItems
    }
    res.render( "boss", hbsObj )

  } )
} )

router.delete( "/delete/:id", function ( req, res ) {
  log( chalk.blue( `req.params.id is: ${req.params.id}` ) )

  db.Shrimp.destroy( {
    where: {
      id: req.params.id
    }

  } ).then( function () {
    res.render( "../views/boss" );
  } )
} );






module.exports = router;