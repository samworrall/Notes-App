(function(exports) {
  describe('NoteListView')
    it('Is instantiated with a NoteList object')
    var list = new NoteList();
    var listview = new NoteListView(list)
    assert.isAnInstanceOf(listview.argument, NoteList)
})(this);
