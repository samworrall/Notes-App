(function(exports) {
  var text = 'test'
  describe('Note')
    it('Checks if Note exists')
    assert.exists(Note, 'testExistenceOfNote')

  describe('Arguments')
    it('Checks if Note takes an argument')
    var note = new Note('1')
    assert.isTrue(note.arguments === 1, 'checksIfNoteTakesAnArgument')

    it('Checks if Note takes only one argument')
    var note = new Note('1')
    assert.isFalse(note.arguments > 1, 'checksIfNoteOnlyTakesOneArgument')

    it('Checks if the argument is a string')
    var note = new Note('1')
    assert.isAString(note.argument, 'checkIfArgumentIsAString')

  describe('#text')
    it('Checks if the text is saved')
    var note = new Note(text)
    assert.areEqual(note.text, text, 'checkIfTextIsSaved')

  describe('#displayNote')
    it('Displays the note text')
    var note = new Note(text)
    assert.areEqual(note.displayNote(), text, 'testDisplayTextMethod')

})(this);
