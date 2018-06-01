(function(exports) {
  function NoteDouble(text) {
    this.text = text
  }

  NoteDouble.prototype = {
    displayNote: function() {
      return 'Favourite drink: seltzer'
    }
  }
  var note = new NoteDouble('Favourite drink: seltzer')
  var singlenoteview = new SingleNoteView(note)

  describe('SingleNoteView')
    it('Exists upon instantiation')
    assert.exists(singlenoteview)

  describe('#note')
    it('Returns the instantiated note')
    assert.areEqual(singlenoteview.note, note)

  describe('#displaySingleNote')
    it('Displays a single note as html')
    assert.areEqual(singlenoteview.displaySingleNote(), '<div>Favourite drink: seltzer</div>')
})(this);
