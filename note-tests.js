(function(exports) {
  function testExistenceOfNote() {

    if (typeof Note === 'undefined') {
      throw new Error("Note is not a constructor function");
    };
  };

  function ChecksIfNoteTakesAnArgument() {
    var note = new Note('Bob')
    if (note.arguments === 0) {
      throw new Error("Incorrect number of arguments. Expected 1, got 0")
    };
  };

  testExistenceOfNote();
  ChecksIfNoteTakesAnArgument();
})(this);
