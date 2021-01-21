function calculate() {
    var amount = $('#amt').val();
    var percentage = $('#tipPercent').val();
    var tip = amount * (percentage / 100);
    var total = Number (amount) + tip;

$('#tipPercent').val( tip.toFixed (2) );      /* Ensure only 2 digits after the decimal */
  $('#total').val( total.toFixed (2) );

  return false;          // prevent default behaviour e.g from submission   i.e any

}

$('#calc').submit( calculate); /** Not working */