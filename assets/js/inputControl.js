//verificar(control, max, maxText, progressText)
function verificar(max, control, maxText, progressText){
  if($('#'+control).val().length > max){
    $('#'+control).val($('#'+control).val().substring(0,max));
  }
  var inputMessage = $('#'+control).val();
  $('#'+maxText).html(0+inputMessage.length);
  $('#'+progressText).html(max - inputMessage.length);

}
