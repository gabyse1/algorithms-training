const removeAnagrams = (words) => {
    let i = 1;
    while (i < words.length) {
        if (words[i - 1].split('').sort().join() === words[i].split('').sort().join()) words.splice(i, 1);
        else i += 1;
    }
    return words;
};

console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));
