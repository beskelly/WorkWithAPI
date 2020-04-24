// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};


function reverseWord(word) {
    var newWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    return newWord;
}


let revWords1 = (sentence) => {
  let wordArray = sentence.split(), result = "";

  for (var i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i];
    let reversedWord = reverseWord(currentWord);
    result += reversedWord;
  }

  return result;
};


let revWords2 = (sentence) => {
  let wordArray = sentence.split(), result = "";

  wordArray.forEach(function(item) {
    let reversedWord = reverseWord(item);
    result += reversedWord;
  });

  return result;
};


let revWords3 = (sentence) => {
  let wordArray = sentence.split(), result = "";

  for (var item of wordArray) {
    let reversedWord = reverseWord(item);
    result += reversedWord;
  }

  return result;
};
