(function(exports) {
  var notelist = new NoteList()

  function doesNoteListExist() {
    assert.exists(notelist, 'doesNoteListExist')
  };

  function checkIfNotesAreStoredInAnArray() {
    assert.isAnArray(notelist.list, 'checkIfNotesAreStoredInAnArray')
  }

  doesNoteListExist();
  checkIfNotesAreStoredInAnArray();
})(this);
