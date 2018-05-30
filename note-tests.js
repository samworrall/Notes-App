(function(exports) {
  var text = 'test'
  function testExistenceOfNote() {
    assert.exists(Note, 'testExistenceOfNote')
  };

  function checksIfNoteTakesAnArgument() {
    var note = new Note('1')
    assert.isTrue(note.arguments === 1, 'checksIfNoteTakesAnArgument')
  };

  function checksIfNoteOnlyTakesOneArgument() {
    var note = new Note('1')
    assert.isFalse(note.arguments > 1, 'checksIfNoteOnlyTakesOneArgument')
  };

  function checkIfArgumentIsAString() {
    var note = new Note('1')
    assert.isAString(note.argument, 'checkIfArgumentIsAString')
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
