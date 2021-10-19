$(document).ready(function() {
  $("#order").submit(function() {
    event.preventDefault();
    $('#order').toggle();
    $('#full').text( $('#first').val() + ' ' + $('#last').val() );
    $('#rbr').text( $('#bracelet').val() );
    $("#rbr").toggle($("#bracelet").is(':checked'))
    $('#rnk').text( $('#necklace').val() );
    $("#rnk").toggle($("#necklace").is(':checked'))
    $('#rer').text( $('#earrings').val() );
    $("#rer").toggle($("#earrings").is(':checked'))
    $('#add1').text( $('#st').val() );
    $('#add2').text( $('#city').val() + ', ' + $('#state').val() + ' ' + $('#zip').val() );
    $("#receipt").toggle();

  })
});
