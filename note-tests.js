(function(exports) {
  function testExistenceOfNote() {
    // var noteOne = new Note();

    if (typeof Note === 'undefined') {
      throw new Error("Note is not a constructor function");
    }
  };

  testExistenceOfNote();
})(this);
