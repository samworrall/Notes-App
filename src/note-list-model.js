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

  NoteList.prototype.createNewNote = function(text) {
    this.addNoteToList(new Note(text))
  }

  exports.NoteList = NoteList;
})(this);
