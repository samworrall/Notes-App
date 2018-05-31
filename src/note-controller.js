appDiv = document.getElementById('app')
contents = appDiv.innerHTML

function changeContents(contents, replacement) {
  contents.innerHTML = replacement
}

changeContents(appDiv, 'howdy');

(function(exports) {
  function NoteController(notelistmodel) {
    notelistmodel.createNewNote('Favourite drink: seltzer')
    var notelistview = new NoteListView(notelistmodel)

    NoteController.prototype.addToHTML = function() {
      var htmlString = notelistview.notesToHTML();
      changeContents(appDiv, htmlString);
    }
  }
  exports.NoteController = NoteController
})(this);

var note = new Note
var listmodel = new NoteList
controller = new NoteController(listmodel)
controller.addToHTML();
