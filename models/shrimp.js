var Sequelize = require( "sequelize" );

module.exports = function ( sequelize, DataTypes ) {

  var Shrimp = sequelize.define( 'Shrimp', {
    shrimp_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),
      validate: {
        len: [ 1, 50 ]
      }
    },
    spiciness: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),
      validate: {
        len: [ 1, 50 ]
      }
    },

  }, {
    timestamps: true
  } );

  return Shrimp;

};