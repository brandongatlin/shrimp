$( document ).ready( function () {

  $.get( "/", function ( req, res ) {

  } )


  $( ".add-order-form" ).on( "submit", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const shrimp_name = $( "#input-order" ).val().trim();
    const spiciness = $( "#spiciness" ).val();

    const order = {
      shrimp_name: shrimp_name,
      spiciness: spiciness
    }

    // Send the POST request.
    $.ajax( "/order", {
      type: "POST",
      data: order
    } ).then(
      function () {
        console.log( 'order was:', order );
        // Reload the page to get the updated list
        location.reload();
      }
    );

    $( "#input-order" ).val( '' );
  } );


  let total = 0;

  $( document ).on( "click", ".btn-order", function () {
    const item = $( this ).attr( "item" )
    const price = parseFloat( $( this ).attr( "price" ) )


    const newOrder = {
      item: item,
      price: price
    }

    $( "#cart" ).append(
      `<li>${newOrder.price}, ${newOrder.item}</li>`
    )
    total += newOrder.price;
    console.log( "new total is:", total )

    $( "#total" ).text( total )

  } )



  $( document ).on( "click", ".delete", function () {
    console.log( "delete clicked" );

    const id = $( this ).attr( "data-id" );
    console.log( "this id is:", id );

    $.ajax( {
      url: '/delete/' + id,
      type: 'DELETE',
      crossDomain: true,
      success: function ( result ) {
        // Do something with the result
        location.reload();

      }
    } );

  } );


} )