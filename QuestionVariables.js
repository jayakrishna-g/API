const Generate = function(x,y) {
    var a=Math.floor(Math.random()*x)
    var b=Math.floor(Math.random()*x)
    return [a,b]
}


module.exports = {
    generate : Generate
}