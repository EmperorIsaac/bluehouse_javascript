// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}  
// answer is 3 

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// answer is 0


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// answer is "hello"

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// answer is "test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//answer is 5 and 5
