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
    assert.areEqual(note.text, text, 'checkIfTextIsSaved')
  };

  function testDisplayTextMethod() {
    var note = new Note(text)
    assert.areEqual(note.displayNote(), text, 'testDisplayTextMethod')
  };

  testExistenceOfNote();
  checksIfNoteTakesAnArgument();
  checksIfNoteOnlyTakesOneArgument();
  checkIfArgumentIsAString();
  checkIfTextIsSaved();
  testDisplayTextMethod();
})(this);
