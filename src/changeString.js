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
    // remove punctuation, remember with idx
    let obj = removePunctuation(word);
    let { punctuationlessWord, removedPunctuation } = obj;
    let newWord = ''
    if(/\[[0-9]+\]/.test(punctuationlessWord)){
        let numStr = punctuationlessWord.slice(1, punctuationlessWord.length - 1);
        let num = Number(numStr);
        newWord = `${num} is ${isPrime(num) ? '' : 'not a '}prime`
    } else {
        newWord = idx % 2 !== 0 ? reverseWord(punctuationlessWord) : punctuationlessWord;
    }
    console.log(removedPunctuation)
    let readyWord = restorePunctuation(newWord, removedPunctuation);
    return readyWord;
}

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}

function reverseWord(word){
    let arr = word.split('');
    let arr2 = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }
    return arr2.join('');
}

function removePunctuation(word){
    let obj = {};
        obj.removedPunctuation = Array.from(word).map(function(e, i){
            if(/[^A-Za-z0-9\[\]]/.test(e)){
                return {symbol: e, idx: i}
        }});
    let wordArr = Array.from(word)
    let filteredWordArr = wordArr.filter(e => isNotPunctuation(e))
        obj.punctuationlessWord = filteredWordArr.join('');
    return obj
}

function restorePunctuation(str, arr){
    let wordArr = Array.from(str);
    arr.forEach(
        o => {if(o !== undefined){
                let { symbol, idx } = o;
                wordArr.splice(idx, 0, symbol);
            }
        }
    )
    return wordArr.join('');
}

function isNotPunctuation(e){
    return /[A-Za-z0-9\[\]]/.test(e)
}

export default changeString;