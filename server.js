const chalkAnimation = require( 'chalk-animation' );

const PORT = process.env.PORT || 3000;

const sequelize = require( "sequelize" )
const bodyParser = require( "body-parser" );

const path = require( 'path' );
const logger = require( "morgan" );

const db = require( "./models" );

// Initialize Express
const express = require( "express" );
const app = express();

const exphbs = require( 'express-handlebars' )

const routes = require( "./controllers/routes.js" );

app.use( "/", routes );


// Use morgan logger for logging requests
app.use( logger( "dev" ) );

// Use body-parser for handling form submissions
app.use( bodyParser.urlencoded( {
  extended: true
} ) );

// Set Handlebars as the default templating engine.
app.engine( "handlebars", exphbs( {
  defaultLayout: "main"
} ) );
app.set( "view engine", "handlebars" );
// //tesing end

// Static directory
app.use( express.static( "public" ) );

db.sequelize.sync( {
  //force: true,
  logging: true

} ).then( function () {
  app.listen( PORT, function () {
    chalkAnimation.rainbow( "App listening on PORT ", 2 + PORT );
  } );
} );