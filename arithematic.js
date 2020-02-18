const options = require('./OptionGenerator')
const question = require('./QuestionVariables')

const retobj = {
    "Question" : "NAN",
    "OptionA" : "NAN",
    "OptionB" : "NAN",
    "OptionC" : "NAN",
    "OptionD" : "NAN",
    "Correct_Option" : "NAN"
}
const Addition = function() {
    var x=question.generate(100,100)
    var ans=x[0]+x[1]
    var op=options.generateints(ans)
    retobj.Question="What is the result when "+x[0]+" is added with "+" "+x[1]
    retobj.OptionA=op.OptionA
    retobj.OptionB=op.OptionB
    retobj.OptionC=op.OptionC
    retobj.OptionD=op.OptionD
    retobj.Correct_Option=op.Correct_Option
}
const BasicOperations = function() {
    var x = Math.floor(Math.random()*10)
    switch (x%5) {
        case 1:
            Addition()
            break
        case 2:
            Subtraction()
            break
        case 3:
            Multiplication()
            break
        case 4:
            Division()
            break
        default:
            ModuloDivision()
            break
    }
}
const Power = function() {
    var x = Math.floor(Math.random()*10)
    switch (x%3) {
        case 1:
            LastDigit()
            break
        case 2:
            ModuloPower()
            break
        default:
            BasicPower()
            break
    }
}
const LcmGcd = function() {
    var x = Math.floor(Math.random()*10)
    switch (x%3) {
        case 1:
            Lcm()
            break
        case 2:
            Gcd()
            break
        default:
            ProductNumbers()
            break
    }
}

const Fractions = function () {
    
}

const getquestion = function() {
    var x=Math.floor(Math.random()*1000)
    switch (x%4) {
        case 1:
            BasicOperations()
            break;
        case 2:
            Power()
            break;
        case 3:
            LcmGcd()
            break;
        default:
            Fractions()
            break;
    }
    return retobj
}
module.exports = {
    getquestion : getquestion
}