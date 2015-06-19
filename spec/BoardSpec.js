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

  describe("On click", function(){
    
    beforeEach(function(done) {
      setTimeout(function() {
        $("#board").mousedown()
        done();
      }, 2000);
    });


    it("Adds a post it note", function(){
      expect($("#board")).toContainElement($(".post-it"))
    })

    it("Hides instructions", function() {
      expect($("#board")).not.toContainElement("#instructions")
    })
    
  })

});
