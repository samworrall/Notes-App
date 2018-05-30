(function(exports) {
  describe('NoteListView')
    it('Is instantiated with a NoteList object')
      var list = new NoteList();
      list.createNewNote('placeholder')
      var listview = new NoteListView(list);
      assert.isAnInstanceOf(listview.argument, NoteList)

  describe('#notesToHTML')
    it('Returns the notes as an html list string')
      assert.areEqual(listview.notesToHTML(), '<ul><li><div>placeholder</div></li></ul>')

    it('Returns an empty string')
      var list2 = new NoteList();
      var listview2 = new NoteListView(list2);
      assert.areEqual(listview2.notesToHTML(), '')
})(this);
