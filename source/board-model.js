function Board() {
}

Board.prototype.addImage = function(image) {
	var imageName = image.split(/[\/\.]/)[1];
	console.log(imageName)
	$("#board").append('<img id="' + imageName + '" src="' + image +  '"/>')
};


Board.prototype.addTrashDropable = function() {
	$("#trash").droppable({
  		drop: function(e, source) {
			source.draggable.remove()
  		}
  	});
};

Board.prototype.addGithubLink = function() {
  	var win = window.open('https://github.com/iraritchiemeek/post-it', '_blank');
  	win.focus();
};
