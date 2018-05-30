(function(exports) {
  var notelist = new NoteList()

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

  doesNoteListExist();
  checkIfNotesAreStoredInAnArray();
  testAddNoteToListFunction();
})(this);
