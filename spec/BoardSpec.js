describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });


  it("should display correct elements on load", function() {
    expect($("#board")).toContainElement("#instructions");
    expect($("#board")).toContainElement("#github");
    expect($("#board")).toContainElement("#trash");
  });

  it("Adds a post it note on click", function(){
    $("#board").mousedown()
    expect($("#board")).toContainElement($(".post-it"))
  })
});
