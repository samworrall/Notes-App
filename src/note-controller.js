appDiv = document.getElementById('app')
contents = appDiv.innerHTML

function changeWord(contents) {
  contents.innerHTML = 'howdy'
}

changeWord(appDiv);
