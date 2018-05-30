(function(exports) {
  function NoteListView(notelist) {
    this.argument = arguments[0]
    this.notelist = notelist
  }

  NoteListView.prototype.notesToHTML = function() {
    var allnotes = this.notelist.returnNotes()
    var html = []
    allnotes.forEach(function(note) {
       html.push('<li><div>' + note.displayNote() + '</div></li>')
     })
     return html.length === 0 ? '' : '<ul>' + html.join('') + '</ul>'
   }

  exports.NoteListView = NoteListView;
})(this);
