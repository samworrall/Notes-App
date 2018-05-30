(function(exports) {
  var text = 'test'
  function testExistenceOfNote() {

    if (typeof Note === 'undefined') {
      throw new Error("Note is not a constructor function");
    } else {
      console.log(`%ctestExistenceOfNote passed!`, 'color: green')
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
    } else {
      console.log(`%cchecksIfNoteOnlyTakesOneArgument passed!`, 'color: green')
    };
  };

  function checkIfArgumentIsAString() {
    var note = new Note('1')
    if (note.argument_type !== 'string') {
      throw new Error("Argument is not a string")
    } else {
      console.log(`%ccheckIfArgumentIsAString passed!`, 'color: green')
    };
  };

  function checkIfTextIsSaved() {
    var note = new Note(text)
    if (note.text !== text) {
      throw new Error("Note text does not equal argument")
    } else {
      console.log(`%ccheckIfTextIsSaved passed!`, 'color: green')
    };
  };

  function testDisplayTextMethod() {
    var note = new Note(text)
    if (note.displayNote() !== text) {
      throw new Error("Note text does not equal argument")
    } else {
      console.log(`%ctestDisplayTextMethod passed!`, 'color: green')
    };
  };

  testExistenceOfNote();
  checksIfNoteTakesAnArgument();
  checksIfNoteOnlyTakesOneArgument();
  checkIfArgumentIsAString();
  checkIfTextIsSaved();
  testDisplayTextMethod();
})(this);
