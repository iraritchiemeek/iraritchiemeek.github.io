$(function() {

  var board = new Board();
  var postIt = new PostIt();
  board.addTrashIcon('imgs/trash.png');
  board.addTrashDropable();

  $('#board').on('mousedown', function(e) {
    if (this === e.target) {
      var x = e.pageX
      var y = e.pageY
      postIt.createNote(x, y);
      postIt.configureNote();
      postIt.colorNote();
      postIt.positionNote(x, y);
    }
  });

  $(document).on('dblclick', '.post-it .header' ,function() {
    $(this.parentElement).remove();
  });

  $(document).on('click', '.post-it' ,function() {
    postIt.bringToFront(this);
  });


});
