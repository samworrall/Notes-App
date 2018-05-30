(function(exports) {
  function doesNoteListExist() {
    var list = new NoteList()
    assert.exists(list, 'doesNoteListExist')
  };

  doesNoteListExist();
})(this);
