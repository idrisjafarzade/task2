let number=[5,7,10,15,6,18]
function filter(number, func) {
let newNum=[]
 for (let i = 0; i < number.length; i++) {
        if (func(number[i])) {
           newNum.push(number[i])
        }
    }
  return newNum
}
console.log(filter(number,x=>x>10))

 
let numbers1=[12,26,23,6,87,48,98]
function find(numbers1, func) {
    let numbers2=[];
    for (let i = 0; i < numbers1.length; i++) {
        if (func(numbers1[i])) {
            numbers2.push(numbers1[i])
            break
        }
    }
   return numbers2
}
console.log(find(numbers1,x=>x>40));




let numbers3=[8,5,3,4,9,7]
function some(numbers2 ,func) {
    for (let i = 0; i < numbers2.length; i++ ) {
        if (func(numbers3[i])) {
          return true
        }
        else{
            return false
        }
    }
    
}
console.log(some(numbers3,x=>x>7));

let numbers4=[8,5,3,4,9,7]
function every(numbers4,func) {
    for (let i = 0; i < numbers4.length; i++) {
        if (func(numbers4[i])) {
            continue
        }
        else{

            return false
        }
    }
    return true
}
console.log(every(numbers4,x=>x>1));

