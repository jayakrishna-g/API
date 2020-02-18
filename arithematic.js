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

const copy_to_ret = function (x,op) {
    retobj.Question=x
    retobj.OptionA=op.OptionA
    retobj.OptionB=op.OptionB
    retobj.OptionC=op.OptionC
    retobj.OptionD=op.OptionD
    retobj.Correct_Option=op.Correct_Option
}
const Addition = function() {
    const x=question.generate(100,100)
    const ans=x[0]+x[1]
    const op=options.generateints(ans)
    const q="What is the result when "+x[0]+" is Added with "+" "+x[1]
    copy_to_ret(q,op)
}
const Subtraction = function() {
    const x=question.generate(100,100)
    const ans=x[0]-x[1]
    const op=options.generateints(ans)
    const q="What is the result when "+x[0]+" is Subtracted with "+" "+x[1]
    copy_to_ret(q,op)
}
const Multiplication = function() {
    const x=question.generate(100,100)
    const ans=x[0]*x[1]
    const op=options.generateints(ans)
    const q="What is the result when "+x[0]+" is Multiplied with "+" "+x[1]
    copy_to_ret(q,op)
}
const Division = function() {
    const x = question.generate(100,100)
    const ans = x[0]/x[1]
    const op = options.generateints(ans)
    const q = "What is the result when "+x[0]+" is Divided with "+" "+x[1]
    copy_to_ret(q,op)
}
const ModuloDivision = function() {
    const x = question.generate(100,100)
    const ans = x[0]%x[1]
    const op = options.generateints(ans)
    const q ="What is the remainder when "+x[0]+" is divided with "+" "+x[1]
    copy_to_ret(q,op)
}
const gcd_two_numbers = function(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}
const Lcm = function() {
    const x = question.generate(100,100)
    const ans1 = gcd_two_numbers(x[0],x[1]);
    const ans = (x[0]*x[1])/ans1;
    const op = options.generateints(ans)
    const q = "What is the LCM of "+x[0]+","+x[1]+"."
    copy_to_ret(q,op)
}
const Gcd = function() {
    const x=question.generate(100,100)
    const ans=gcd_two_numbers(x[0],x[1]);
    const op=options.generateints(ans)
    const q="What is the GCD of "+x[0]+","+x[1]+"."
    copy_to_ret(q,op)
}

const powerMod = function(base, exponent, modulus) {
    if (modulus === 1) return 0;
    var result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1)  
            result = (result * base) % modulus;
        exponent = exponent >> 1;
        base = (base * base) % modulus;
    }
    return result;
}
const power = function(base, exponent) {
    if (exponent === 1) return base;
    var result = 1;
    base = base;
    while (exponent > 0) {
        if (exponent % 2 === 1)  
            result = (result * base);
        exponent = exponent >> 1;
        base = (base * base);
    }
    return result;
}
const BasicPower = function() {
    const x=question.generate(100,5)
    const ans=power(x[0],x[1]);
    const op=options.generateints(ans)
    const q="What is the result when "+x[0]+" is raised to power of "+x[1]+"."
    copy_to_ret(q,op)
}
const LastDigit = function() {
    const x=question.generate(100,100)
    const ans=powerMod(x[0],x[1],10);
    const op=options.generateints(ans)
    const q="What is the LastDigit when "+x[0]+" is raised to power of "+x[1]+"."  
    copy_to_ret(q,op)
}
const ProductNumbers = function() {
    const v = question.generate(100,100)
    const gcd = gcd_two_numbers(v[0],v[1])
    const lcm = ( v[0] * v[1] )/gcd
    const x = Math.floor(Math.random()*10)
    let q=""
    let ans=0
    switch (x%2){
        case 1 :
            //Lcm Product
            q = "If Lcm Of two numbers is "+lcm+" and product of two numbers is "+(v[0]*v[1])+" what is their GCD"
            ans = gcd
            break;
        case 2 :
            // Gcd product
            q = "If Gcd Of two numbers is "+gcd+" and product of two numbers is "+(v[0]*v[1])+" what is their LCM"
            ans = lcm
            break;
        default :
            // LCM Gcd
            q = "If Lcm Of two numbers is "+lcm+" and Gcd is "+gcd+" what is their product of two numbers"
            ans = v[0]*v[1]  
    }
    copy_to_ret(q,options.generateints(ans))
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



const getquestion = function() {
    var x=Math.floor(Math.random()*1000)
    switch (x%4) {
        case 1:
            BasicOperations()
            break;
        case 2:
            Power()
            break;
        default:
            LcmGcd()
            break;
    }
    return retobj
}
module.exports = {
    getquestion : getquestion
}