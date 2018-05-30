(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNoteToList = function(note) {
    this.list.push(note);
  }

  NoteList.prototype.returnNotes = function() {
    return this.list
  }

  exports.NoteList = NoteList;
})(this);
