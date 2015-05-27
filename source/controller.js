$(function() {

  var postIt = new PostIt();

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
    console.log('tree')
    $(this.parentElement).remove();
  });

});
