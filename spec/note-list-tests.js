(function(exports) {
  var notelist = new NoteList()
  var note = new Note('placeholder')

  function doesNoteListExist() {
    assert.exists(notelist, 'doesNoteListExist')
  };

  function checkIfNotesAreStoredInAnArray() {
    assert.isAnArray(notelist.list, 'checkIfNotesAreStoredInAnArray')
  };

  function testAddNoteToListFunction() {
    notelist.addNoteToList('test');
    assert.isTrue(notelist.list.length === 1, 'testAddNoteToListFunction')
  };

  function testAddedNoteIsANote() {
    notelist2 = new NoteList();
    notelist2.addNoteToList(note);
    assert.areEqual(notelist2.list[0], note, 'testAddedNoteIsANote')
  };

  doesNoteListExist();
  checkIfNotesAreStoredInAnArray();
  testAddNoteToListFunction();
  testAddedNoteIsANote();
})(this);
