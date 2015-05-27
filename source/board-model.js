function Board() {
}

Board.prototype.addTrashIcon = function(image) {
	$('#board').append('<img id="trash" src="' + image +  '"/>')
};

Board.prototype.addTrashDropable = function() {
	$( "#trash" ).droppable({
  		drop: function(e) {
			e.draggable.remove()
  		}
  	});
};
