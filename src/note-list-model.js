(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNoteToList = function(note) {
    this.list.push(note);
  }

  exports.NoteList = NoteList;
})(this);
