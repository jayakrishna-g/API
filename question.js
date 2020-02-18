const sdt=require('./sdt')
const arithematic=require('./arithematic')
const equations=require('./equations')

const getquestion = function(x){
    var retobj={
        "Question" : "NAN",
        "OptionA" : "NAN",
        "OptionB" : "NAN",
        "OptionC" : "NAN",
        "OptionD" : "NAN",
        "Correct_Option" : "NAN"
    }
    console.log(x);
    switch (x) {
        case "1":
            retobj=arithematic.getquestion();
            break;
        case "2":
            retobj=equations.getquestion();
            break;
        case "3":
            retobj=sdt.getsdt();
            break;
        default:
            break;
    }
    return retobj
}
module.exports={
    getquestion : getquestion
}