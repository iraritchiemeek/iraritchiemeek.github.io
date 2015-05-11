var Board = function( selector ) {
  // Your board related code goes here

  // Use $elem to access the DOM element for this board
  var $elem = $( selector );

  function initialize() {
    $elem.on('click', function(e) {
      console.log('test')
      div = $("<div />")
      div.attr({class: 'post-it'});
      div.css({top: e.pageY, left: e.pageX})
      div.append('<div class="header"></div>')
      div.append('<div class="conent"></div>')
      $elem.append(div)
    });
  };

  initialize();
};

var PostIt = function() {
};

PostIt.prototype.addNote = function() {
  console.log('work')
}


$(function() {
  // This code will run when the DOM has finished loading
  new Board('#board');
});
