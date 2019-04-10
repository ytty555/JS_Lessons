function betweenMarkers(text, begin, end) {
    return text.slice(text.indexOf(begin) + 1, text.indexOf(end));
}

console.log(betweenMarkers('What is >apple<', '>', '<'));