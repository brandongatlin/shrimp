//new//
const express = require( "express" );
const app = express();
const bodyParser = require( "body-parser" );

const path = require( "path" );
const db = require( "./models" );
const exphbs = require( "express-handlebars" );
const sequelize = require( "sequelize" );

const chalkAnimation = require( 'chalk-animation' );

const PORT = process.env.PORT || 3000;

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.use( bodyParser.text() );
app.use( bodyParser.json( {
  type: "application/vnd.api+json"
} ) );

app.engine( "handlebars", exphbs( {
  defaultLayout: "main"
} ) );
app.set( "view engine", "handlebars" );

app.use( express.static( "public" ) );

const routes = require( "./controllers/routes.js" )
app.use( "/", routes );

db.sequelize.sync( {
  // force: true,
  // logging: true

} ).then( function () {
  app.listen( PORT, function () {
    chalkAnimation.rainbow( "App listening on PORT ", 2 + PORT );
  } );
} );