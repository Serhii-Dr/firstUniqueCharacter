// DOM nodes

const form = document.querySelector('.form');
const area = document.querySelector('.form__textarea');
const paragraph = document.querySelector('.form__result-field');

// Form listener for handling user input

form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent page reload after submit
  if (!area.value) {
    // check if value of textarea includes some text
    return;
  } else {
    let uniqueStrFromWords = '';
    area.value.split(/\s+/).forEach((word) => {
      // Split string into separate words
      uniqueStrFromWords += nonRepeated(word); // find first unique character in each word in text
    });

    const result = nonRepeated(uniqueStrFromWords); // get first unique character from previous result
    paragraph.textContent = `Unique letter is '${result}'`;
    area.value = '';
  }
});

// helper function for getting unique character from string

function nonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i); // choose a character from string
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char; // if it appears only once in sting return it
    }
  }
  return;
}
