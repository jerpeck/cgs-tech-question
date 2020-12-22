// Write a program that reads in a string and print out its content with the following modifications:

// Odd words' letters should be reversed.
// Even words remain the same.
// Odd and even refers to the word's position in the string, starting with zero.
// Punctuation retains original position.

//EXAMPLE INPUT
//   "If you want to visit Grio, you can go to http://grio.com or 625 market street. Thank you."

// EXAMPLE OUTPUT
//   "If uoy want ot visit oirG, you nac go ot http://grio.com ro 625 tekram street. knahT you."

// TO BE CONTINUED…

// For numbers in brackets: # Prime numbers should be replaced with "<number> is prime" # Non prime numbers should be replaced with "<number> is not a prime"

// Example input
//   "If you want to visit Grio, you can go to http://grio.com or 625 market street. [33]. [73]. Thank you."

// Example output
// If uoy want ot visit oirG, you nac go ot http://grio.com ro 625 tekram street. 33 is not a prime. 73 is prime.  knahT you."



// NB: Hyphenated words count as one word

function changeString(str){
    let arr = str.split(' ');
    let processedStr = arr.map((word, idx) => processWord(word, idx));
    return processedStr.join(' ');
}

function processWord(word, idx){
    let newWord = idx % 2 !== 0 ? reverseWord(word) : word;
    return newWord;
}

function reverseWord(word){
    let arr = word.split('');
    let arr2 = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }
    return arr2.join('');
}

export default changeString;