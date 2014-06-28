var tall = function(boxes) {
  var maxHeight = Math.max.apply(
    Math, boxes.map(function() {
      return $(this).height();
  }).get());

  boxes.height(maxHeight);
};


tall( $('.agency-links .card h4') );
tall( $('.latest-reports .card h4') );

$('form').submit(function(){
  var input =  $(this).find('input')[0];
  if($(input).val() === '') {
    alert("The search field can't be empty");
    $(input).focus();
    return false;
  }
});
