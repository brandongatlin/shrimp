$( document ).ready( function () {
  console.log( "app.js loaded" );

  $.get( "/", function ( req, res ) {

  } )


  $( ".add-order-form" ).on( "submit", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log( 'submit clicked' );

    const shrimp_name = $( "#input-order" ).val().trim();
    const spiciness = $( "#spiciness" ).val().trim();

    const order = {
      shrimp_name: shrimp_name,
      spiciness: spiciness
    }

    console.log( 'order was:', order );

    // Send the POST request.
    $.ajax( "/order", {
      type: "POST",
      data: order
    } ).then(
      function () {
        console.log( "ordered", order );
        // Reload the page to get the updated list
        location.reload();
      }
    );

    $( "#input-order" ).val( '' );
  } );



} )