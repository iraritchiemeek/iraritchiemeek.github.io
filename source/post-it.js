$(function() {

    $('#board').append('<div class="post-it ui-draggable ui-resizable" style="top: 188px; left: 711px; position: absolute; width: 243px; height: 243px; background-color: yellow;"><div class="header"></div><div class="content" contenteditable="true">Welcome to post-it online!<br><br>To add a note click anywhere on the page.<br><br>To delete a note double click on the top of a note.<br><br>You can also resize and move your notes.</div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div>')

    var color = function() {
     return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }

    $('.ui-dialog .ui-resizable-se').css('backgroundImage', 'url("")');

    $('#board').on('click', function(e) {
      div = $("<div>")
      div.attr({class: 'post-it'});
      div.css({top: e.pageY, left: e.pageX, backgroundColor: color()})
      div.append('<div class="header"></div>')
      div.append('<div class="content" contentEditable="true"></div>')
      $('#board').append(div)

      $('.post-it').draggable({
        cursor: 'move',
        containment: "#board",
        handle: ".header"
      });

      $('.post-it').resizable({
        ghost: true,
        aspectRatio: true
      });

      $('.post-it .header').on('dblclick', function() {
        $(this.parentElement).remove();
      });
    });


});


