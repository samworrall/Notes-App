(function(exports) {
  describe('NoteListView')
    it('Is instantiated with a NoteList object')
      var list = new NoteList();
      list.createNewNote('placeholder')
      var listview = new NoteListView(list);
      assert.isAnInstanceOf(listview.argument, NoteList)

  describe('#notesToHTML')
    it('Returns the note as an html list string')
      assert.areEqual(listview.notesToHTML(), '<ul><li><div>placeholder</div></li></ul>')

    it('Returns all notes as an html list string')
      list.createNewNote('placeholder2')
      var listview2 = new NoteListView(list)
      assert.areEqual(listview2.notesToHTML(), '<ul><li><div>placeholder</div></li><li><div>placeholder2</div></li></ul>')

    it('Returns an empty string')
      var list2 = new NoteList();
      var listview2 = new NoteListView(list2);
      assert.areEqual(listview2.notesToHTML(), '')

    it('Only shows the first 20 characters of each note')
    var list3 = new NoteList();
    var listview3 = new NoteListView(list3)
    list3.createNewNote('This is more than twenty characters long')
    list3.createNewNote('This is also more than twenty characters long')
    assert.areEqual(listview3.notesToHTML(), '<ul><li><div>This is more than tw</div></li><li><div>This is also more th</div></li></ul>')
})(this);
