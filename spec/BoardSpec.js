describe("Board", function() {
  var board;
  var container

  beforeEach(function() {
    container = "<div id='board'><div id='instructions'>Click to add a note</div></div>"
    board = new Board();
  });


  it("should display instructions", function() {
    console.log($(container))
    expect($(container)).toContainElement("#instructions");
  });

});
