(function(exports) {

  function Element() {
    this.text = 'hello'
  }

  Element.prototype = {
    innerHTML: function() {
      return this.text
    }
  }

  function DocumentDouble() {
  }

  DocumentDouble.prototype = {
    getElementById: function() {
      return new Element()
    }
  }

  function NoteListModelDouble() {
    this.createNewNoteCount = 0;
  }

  NoteListModelDouble.prototype = {
    createNewNote: function() {
      this.createNewNoteCount++;
    }
  }

  var doc = new DocumentDouble();
  var notelistmodel = new NoteListModelDouble();
  var notecontroller = new NoteController(notelistmodel)
  NoteListView.prototype.notesToHTML = function() {
    return '<ul><li><div>test</div></li></ul>'
  }

  describe('NoteListModel')
    it('Checks if NoteListModel exists')
    assert.exists(notecontroller)

  describe('#addNote')
    it('Adds a new note behind the scenes')
    notecontroller.addNote('test')
    assert.areEqual(notelistmodel.createNewNoteCount, 1)

  describe('#addToHTML')
    it('Returns an html list string')
    console.log(notecontroller.addToHTML('app', doc))
    assert.areEqual(notecontroller.addToHTML('app', doc), '<ul><li><div>test</div></li></ul>')

})(this);
