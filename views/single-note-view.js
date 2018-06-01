(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.displaySingleNote = function() {
    var noteText = this.note.displayNote();
    return '<div>' + noteText + '</div>'
  }

  exports.SingleNoteView = SingleNoteView
})(this);
