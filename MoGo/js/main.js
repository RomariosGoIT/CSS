$(document).ready(function() {
  $('#toggle-2').hide();
  $('#toggle-3').hide();

  if ($('#button-1').hasClass('active')) {
    $('#toggle-1').show('blind');
  }

  $('#button-1').click(function() {
    $(this).toggleClass('active');
    $('#toggle-1').toggle('blind');
    $('#button-2').removeClass('active');
    $('#button-3').removeClass('active');
    $('#toggle-2').hide('blind');
    $('#toggle-3').hide('blind');
  });
  $('#button-2').click(function() {
    $(this).toggleClass('active');
    $('#toggle-2').toggle('blind');
    $('#button-1').removeClass('active');
    $('#button-3').removeClass('active');
    $('#toggle-1').hide('blind');
    $('#toggle-3').hide('blind');
  });
  $('#button-3').click(function() {
    $(this).toggleClass('active');
    $('#toggle-3').toggle('blind');
    $('#button-2').removeClass('active');
    $('#button-1').removeClass('active');
    $('#toggle-2').hide('blind');
    $('#toggle-1').hide('blind');
  });
});
