var tall = function(boxes) {
  var maxHeight = Math.max.apply(
    Math, boxes.map(function() {
      return $(this).height();
  }).get());

  boxes.height(maxHeight);
};

// var boxes = $('.agency-links .card');
tall( $('.agency-links .card h4') );
tall( $('.latest-reports .card h4') );
