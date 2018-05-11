const chalk = require( "chalk" )
const log = console.log;
const express = require( 'express' );
const router = express.Router();
const bodyParser = require( "body-parser" );
const path = require( 'path' );
// const shrimpModel = require( "../models/shrimp.js" );
const db = require( "../models" );


// const logger = require( "morgan" );

router.get( "/", function ( req, res ) {
  db.Shrimp.findAll( {
    where: {
      spiciness: "mild"
    }
  } ).then( function ( mild ) {

    let mildObj = {
      mildShrimp: mild
    }
    res.render( "./layouts/partials/mildmenu", mildObj )
  } )





  // db.Shrimp.findAll( {
  //   where: {
  //     spiciness: "hot"
  //   }
  // } ).then( function ( hot ) {
  //
  //   let hotObj = {
  //     hotShrimp: hot
  //   }
  //   // res.render( "index", hotObj )
  // } )
  //
  //
  //
  //
  //
  // db.Shrimp.findAll( {} ).then( function ( buttocks ) {
  //
  //   let buttObj = {
  //     shrimp: shrimp
  //   }
  //   res.render( "index", hbsObject )
  // } )

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