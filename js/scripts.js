
// Business on top
function sentenceCheck(userInput) {
  var splitSentences = userInput.split(" ");
  var entencesay = [];
  splitSentences.forEach(function(splitSentence) {
  var wordOut = punctuationCheck(splitSentence);
  entencesay.push(wordOut);
  });
  var outPut = entencesay.join(" ");
  return outPut;
}

function punctuationCheck(word){
  var punct = word.match(/\W+/);
  if (punct){
    var i = word.length - 1;
    word = word.substr(0, i);
    var vowelResult = (vowelcheck(word));
    var consonantResult = consonantCheck(word);
    if (vowelResult) {
      var esultray = vowelResult + punct;
    } else {
      var esultray = consonantResult + punct;
    }
    return esultray
  } else {
  var vowelResult = (vowelcheck(word));
  var consonantResult = consonantCheck(word);
    if (vowelResult) {
      var esultray = vowelResult;
    } else {
      var esultray = consonantResult;
    }
    return esultray
  };
}
  
function vowelcheck(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var splitWords = word.split("");
  var ordway;
  vowels.forEach(function (vowel) {
    if (splitWords[0].includes(vowel)) {
      ordway = splitWords.join("") + "way";
      console.log("function:", ordway);
    };
  });
  return ordway
};

function consonantCheck(word) {
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "qu", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "QU", "Qu", "qU", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  var splitWords = word.split("");
  var ordway;
  for (index = 0; index < word.length; index++) {
    consonants.forEach(function (consonant) {
      if (splitWords[0].includes(consonant)) {
        if (splitWords[0] === "q" || splitWords[0] === "Q"){
          var q = splitWords.shift();
          splitWords.push(q)
          if (splitWords[0] === "u" || splitWords[0] === "U"){
            var u = splitWords.shift();
            splitWords.push(u)
          }; 
        } else {
          var shift = splitWords.shift()
          splitWords.push(shift);
        };
      };
    });
  };
  ordway = splitWords.join("") + "ay";
  console.log("function:", ordway);
  return ordway;
};


// User Interface
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var sentenceInput = $("input#sentence").val();
    if (!sentenceInput) {
      alert("Please enter some text.")
    } else {
      alert(sentenceCheck(sentenceInput));
    }
  });
});
