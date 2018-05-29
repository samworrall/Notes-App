(function(exports) {
  function testExistenceOfNote() {

    if (typeof Note === 'undefined') {
      throw new Error("Note is not a constructor function");
    };
  };

  function checksIfNoteTakesAnArgument() {
    var note = new Note('1')
    assert.isTrue(note.arguments === 1, 'checksIfNoteTakesAnArgument')
    // {
    //   throw new Error("Incorrect number of arguments. Expected 1, got 0")
    // };
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
    var text = 'test'
    var note = new Note(text)
    if (note.text !== text) {
      throw new Error("Note text does not equal argument")
    };
  };

  testExistenceOfNote();
  checksIfNoteTakesAnArgument();
  checksIfNoteOnlyTakesOneArgument();
  checkIfArgumentIsAString();
  checkIfTextIsSaved();
})(this);
