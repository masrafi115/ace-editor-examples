let langTools = ace.require("ace/ext/language_tools");

var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow");
editor.session.setMode("ace/mode/html");
// enable autocompletion and snippets
editor.setOptions({
  enableBasicAutocompletion: true,
// enableSnippets: true,
  enableLiveAutocompletion: true
});

let wordList = [{
  "word": "auto",
  "freq": 24,
  "score": 300,
  "flags": "bc",
  "syllables": "1"
}];

var autoCompleter = {
  getCompletions: (editor, session, pos, prefix, callback) => {
    if (prefix.length === 0) {
      callback(null, []);
      return
    }
    	
    console.log(pos, session.getTokenAt(pos.row, pos.column));
    
    callback(null, wordList.map(function(ea) {
      return {
        name: ea.word,
        value: ea.word,
        score: ea.score,
        meta: "auto"
      };
    }))
  }
}

langTools.addCompleter(rhymeCompleter);
