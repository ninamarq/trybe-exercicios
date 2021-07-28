let a = 3;
let b = 7;
let c = 1;

if (a < b < c) {
    console.log("C é o maior");
}
else if (a < c < b) {
    console.log("b é o maior")
}
else if ( b < a < c) {
    console.log("c é o maior")
}
else if ( b < c < a) {
    console.log("a é o maior")
}
else if ( c < b < a) {
    console.log("a é o maior")
}
else if ( c < a < b) {
    console.log("b é o maior")
}