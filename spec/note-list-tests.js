(function(exports) {
  var notelist = new NoteList()
  var note = new Note('placeholder')

  describe('Notelist')
    it('Checks if Notelist exists')
    assert.exists(notelist)

  describe('#list')
    it('Checks if the list is an array')
    assert.isAnArray(notelist.list)

  describe('#addNoteToList')
    it('increases the list array by 1')
    notelist.addNoteToList('test');
    assert.isTrue(notelist.list.length === 1)

    it('Tests if the note is added to the list array')
    notelist2 = new NoteList();
    notelist2.addNoteToList(note);
    assert.areEqual(notelist2.list[0], note)

  describe('#ReturnNotes')
    it('Returns all the notes in the list')
    notelist3 = new NoteList();
    notelist3.addNoteToList('test1')
    notelist3.addNoteToList('test2')
    assert.areEqual(notelist3.returnNotes(), ['test1', 'test2'])
})(this);
