$(function() {

  var board = new Board();
  var postIt = new PostIt();
  board.addImage('imgs/trash.png');
  board.addImage('imgs/github.png');
  board.addTrashDropable();

  $('#board').on('mousedown', function(e) {
    console.log('yes')
    $('#instructions').fadeOut(1600, function(){
      $('#instructions').remove()
    });
    if (this === e.target) {
      var x = e.pageX
      var y = e.pageY
      postIt.createNote(x, y);
      postIt.configureNote();
      postIt.colorNote();
      postIt.positionNote(x, y);
    }
  });

  $(document).on('click', '.post-it' ,function() {
    postIt.bringToFront(this);
  });

  $(document).on('click', '#github' ,function() {
    board.addGithubLink();
  });


});
