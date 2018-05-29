(function(exports) {
  function Note(text) {
    this.arguments = arguments.length
    this.argument_type = typeof arguments[0]
    this.text = text
  };

  exports.Note = Note;
})(this);
