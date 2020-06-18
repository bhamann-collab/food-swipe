function shuffleObjects(obj) {
    for (var i = 0; i < Object.keys(obj).length - 1; i++) {
        var j = i + Math.floor(Math.random() * (Object.keys(obj).length - i));

        var temp = obj[j];
        obj[j] = obj[i];
        obj[i] = temp;
    }
    return obj;
}

module.exports = shuffleObjects