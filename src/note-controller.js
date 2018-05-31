appDiv = document.getElementById('app')
contents = appDiv.innerHTML

function changeContents(contents, replacement) {
  contents.innerHTML = replacement
}

changeContents(appDiv, 'howdy');

(function(exports) {
  function NoteController(notelistmodel) {
    this.notelist = notelistmodel
    this.notelistview = new NoteListView(this.notelist)

    NoteController.prototype.addNote = function(text) {
      this.notelist.createNewNote(text);
    }

    NoteController.prototype.addToHTML = function() {
      var htmlString = this.notelistview.notesToHTML();
      changeContents(appDiv, htmlString);
    }
  }
  exports.NoteController = NoteController
})(this);

var listmodel = new NoteList
controller = new NoteController(listmodel)
controller.addNote('Favourite drink: seltzer');
controller.addToHTML();
