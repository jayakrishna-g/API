var retobj = {
    "OptionA" : "NAN",
    "OptionB" : "NAN",
    "OptionC" : "NAN",
    "OptionD" : "NAN",
    "Correct_Option" : "NAN"
}

const getSign = function() {
    const x=Math.floor(Math.random()*1000)
    if ( x%2 == 0 ) {
        return true
    }
    return false
}

const getOption = function (x,y) {
    var b = 0
    if( getSign()==true ) {
        b=x+Math.floor(Math.random()*y)
    }
    else {
        b=x-Math.floor(Math.random()*y)
    }
    while ( b == x ){
        b=x+Math.floor(Math.random()*y)
    }
    return b
}

const optionA = function (x,y) {
    retobj.OptionA = x
    retobj.OptionB = getOption(x,y)
    retobj.OptionC = getOption(x,y)
    retobj.OptionD = getOption(x,y)
    retobj.Correct_Option = 1
}

const optionB = function(x,y) {
    retobj.OptionB = x
    retobj.OptionA = getOption(x,y)
    retobj.OptionC = getOption(x,y)
    retobj.OptionD = getOption(x,y)
    retobj.Correct_Option = 2
}

const optionC = function(x,y) {
    retobj.OptionC = x
    retobj.OptionA = getOption(x,y)
    retobj.OptionB = getOption(x,y)
    retobj.OptionD = getOption(x,y)
    retobj.Correct_Option = 3
}

const optionD = function(x,y) {
    retobj.OptionD = x
    retobj.OptionA = getOption(x,y)
    retobj.OptionB = getOption(x,y)
    retobj.OptionC = getOption(x,y)
    retobj.Correct_Option = 4
}

const GenerateIntegers = function(ans) {
    var x=Math.floor(Math.random()*100)
    x=x%4;
    switch (x) {
        case 1:
            optionB(ans,10)
            break;
        case 2:
            optionC(ans,10)
            break;
        case 3:
            optionD(ans,10)
            break;
        default:
            optionA(ans,10)
            break;
    }
    return retobj
}


module.exports = {
    generateints : GenerateIntegers
}