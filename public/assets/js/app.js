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

    $( ".notification" ).addClass( "slideInOut" )
    setTimeout( function () {
      $( ".notification" ).removeClass( "slideInOut" )
    }, 2500 )

    const item = $( this ).attr( "item" )
    const price = parseFloat( $( this ).attr( "price" ) )


    const newOrder = {
      item: item,
      price: price
    }

    $( "#cart" ).append(
      `<div class="row"><div class="menu-item">${newOrder.price}, ${newOrder.item}</div></div>`
    )
    total += newOrder.price;
    console.log( "new total is:", total )

    $( "#total" ).text( total.toFixed( 2 ) )

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

  $( document ).on( "click", "#pay-btn", function () {

    $( "#modal-bill" ).append( total.toFixed( 2 ) )
  } )

  $( document ).on( 'hidden.bs.modal', function () {
    location.reload();


  } )

} )