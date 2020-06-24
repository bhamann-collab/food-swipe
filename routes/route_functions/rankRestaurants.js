function rankRestaurants(names, values) {
    let arr = [];

    //combining the two arrays together
    names.forEach(function(v,i) {
        let obj = {};
        obj.meta = v;
        obj.value = values[i];
        arr.push(obj)
    })

    arr.sort(function(a, b) {
        return b.value - a.value
    })
    return arr
}

module.exports = rankRestaurants