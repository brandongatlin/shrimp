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
  db.Shrimp.findAll( {} ).then( function ( shrimp ) {

    let hbsObject = {
      shrimp: shrimp
    }
    log( chalk.blue( hbsObject ) )
    res.render( "index", hbsObject )

  } )

} );

//example
// router.get( "/driver-info-page", function ( req, res ) {
//   // findAll returns all entries for a table when used with no options
//   db.Student.findAll( {
//     where: {
//       busrider: true
//     }
//   } ).then( function ( dbStu ) {
//     chalkAnimation.rainbow( "Student Table Queried", 2 );
//     // console.log("dbStu =", dbStu[0].student_first_name);
//
//     var addresses;
//     var addressesArr = [];
//
//     for ( let addresses of Object.values( dbStu ) ) {
//       addresses = addresses.address;
//       addressesArr.push( addresses );
//
//     } //end of loop
//
//     var hbsObject = {
//       addresses: addressesArr,
//       students: dbStu
//     };
//
//     res.render( "driver-info-page", hbsObject );
//
//   } );
//
// } );

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