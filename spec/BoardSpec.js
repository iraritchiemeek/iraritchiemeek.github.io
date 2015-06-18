describe("Board", function() {
  var board;



  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'http://localhost:8000/';
    loadFixtures("/spec/board-fixture.html")
    $.holdReady(false);
    board = new Board();
  });


  it("should display correct elements on load", function() {
    console.log($("#gfyukkuyvuyk").children())
    expect($("#board")).toContainElement("#instructions");
    expect($("#board")).toContainElement("#github");
    expect($("#board")).toContainElement("#trash");
  });

  it("Adds a post it note on click", function(){
    $("#board").click()
    expect($("#board")).toContainElement($(".post-it"))
  })
});
