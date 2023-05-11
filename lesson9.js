

var even = []
var odd = []

for(let i = 1; i<= 15; i++){
    if(i%2 == 0){
        even.push(i)
    }else{
        odd = odd + i + " ";
    }
}
console.log("even numbers: " + even)
console.log("odd numbers: " + odd)

console.log(typeof(even))
console.log('Hi Folks')



