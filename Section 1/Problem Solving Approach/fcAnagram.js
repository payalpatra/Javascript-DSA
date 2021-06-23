// Frequency Counter Anagram

//  What is Anagram ? 
//  Ans - Two words are called anagrams if they have the same letters and same also same frequency of letters

function fcAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    frequency = {};
    for (let i = 0; i < str1.length; i++) {
        // Letters of the String1 
        let letter = str1[i];
        frequency[letter] ? frequency[letter] += 1 : frequency[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        // Letters of the String2
        let letter = str2[i];
        if(!frequency[letter]){
            return false;
        }else {
            frequency[letter] -= 1;
        }
    }

    return true;

}

console.log(fcAnagram("anagram", "nagaram"))


