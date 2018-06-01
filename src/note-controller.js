function getElement(id, doc) {
  appDiv = doc.getElementById(id)
  return appDiv
}

function changeContents(id, replacement, doc) {
  var newelement = getElement(id, doc).innerHTML = replacement
  return newelement
}

(function(exports) {
  function NoteController(notelistmodel) {
    this.notelist = notelistmodel
    this.notelistview = new NoteListView(this.notelist)

    NoteController.prototype.addNote = function(text) {
      this.notelist.createNewNote(text);
    }

    NoteController.prototype.addToHTML = function(id, doc = document) {
      var htmlString = this.notelistview.notesToHTML();
      return changeContents(id, htmlString, doc);
    }
  }

  exports.NoteController = NoteController
})(this);
