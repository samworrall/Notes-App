(function(exports) {
  function testExistenceOfNote() {

    if (typeof Note === 'undefined') {
      throw new Error("Note is not a constructor function");
    };
  };

  function checksIfNoteTakesAnArgument() {
    var note = new Note('1')
    if (note.arguments === 0) {
      throw new Error("Incorrect number of arguments. Expected 1, got 0")
    };
  };

  function checksIfNoteOnlyTakesOneArgument() {
    var note = new Note('1')
    if (note.arguments > 1) {
      throw new Error(`Incorrect number of arguments. Expected 1, got ${note.arguments}`)
    };
  };

  function checkIfArgumentIsAString() {
    var note = new Note('1')
    if (note.argument_type !== 'string') {
      throw new Error("Argument is not a string")
    };
  };

  function checkIfTextIsSaved() {
    var note = new Note('1')
    if (note.text !== '1') {
      throw new Error("Note text does not equal argument")
    };
  };

  testExistenceOfNote();
  checksIfNoteTakesAnArgument();
  checksIfNoteOnlyTakesOneArgument();
  checkIfArgumentIsAString();
  checkIfTextIsSaved();
})(this);
