(function(exports) {
  function Note(text) {
    this.arguments = arguments.length
    this.argument_type = typeof arguments[0]
    this.text = text
  };

  Note.prototype.displayNote = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
