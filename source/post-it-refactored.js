function PostIt() {
  this.color = null
}

PostIt.prototype.createNote = function () {
  var noteHTML = "<div class='post-it'>";
  noteHTML += "<div class='header'></div>";
  noteHTML += "<div class='content' contentEditable='true'></div>";
  $('#board').append(noteHTML);
};

PostIt.prototype.positionNote = function (x, y) {
  $('.post-it').last().css({top: y, left: x})
}

PostIt.prototype.configureNote = function (note) {
  $('.post-it').draggable({
    cursor: 'move',
    containment: "#board",
    handle: ".header"
  });

  $('.post-it').resizable({
    aspectRatio: true
  });
};

PostIt.prototype.colorNote = function () {
  this.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  $('.post-it').last().css('backgroundColor', this.color)
}
