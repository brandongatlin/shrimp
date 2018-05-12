var Sequelize = require( "sequelize" );

module.exports = function ( sequelize, DataTypes ) {

  var Shrimp = sequelize.define( 'Shrimp', {
    shrimp_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),
      // validate: {
      //   len: [ 1, 50 ]
      // }
    },
    spicy: {
      allowNull: false,
      type: DataTypes.BOOLEAN(),
      defaultValue: false,
      // validate: {
      //   len: [ 1, 50 ]
      // }
    },

    info: {
      allowNull: false,
      type: DataTypes.TEXT(),
      defaultValue: "Custom Order",
    },

    price: {
      allowNull: false,
      type: DataTypes.DECIMAL( 10, 2 ),
      defaultValue: 10,
    },

    // ordered: {
    //   allowNull: false,
    //   type: DataTypes.BOOLEAN(),
    //   defaultValue: false,
    //   // validate: {
    //   //   len: [ 1, 50 ]
    //   // }
    // },

  }, {
    timestamps: false
  } );

  return Shrimp;

};