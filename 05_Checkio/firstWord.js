function firstWord(a, b) {
    let resStr = '';
    let iskl = ['.', ',', ' '];
    let chPresent = false;
    
    function isCh(ch) {
        return !(iskl.includes(ch));
    }
    
    for (let i = 0; i < a.length; i++) {
        if (isCh(a[i])) {
            resStr += a[i];
            chPresent = true;
        } else if (!isCh(a[i]) && chPresent) {
            break;
        }
    }
    return resStr;
}

console.log(firstWord("... and so on ..."));