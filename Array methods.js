let num = [1, 2, 4, 7, 28]

//push method
const pushMethod=()=>{
    let push  = num.push(22)
    console.log(push, "push")
    console.log(num)
}

//pop method
const popMethod=()=>{
    let pop = num.pop()
    console.log(pop, "pop")
    console.log(num)
}

//shift method
const shiftMethod=()=>{
    let shift = num.shift()
    console.log(shift, "shift")
    console.log(num)
}

//unshift Method
const unShiftMethod=()=>{
    let unShift = num.unshift(25)
    console.log(unShift, "unshift")
    console.log(num)
}

//Delete Method
const deleteMethod=()=>{
    let Delete = delete num[2]
    console.log(Delete, "Delete")
    console.log(num) 
}

//Concat Method
let num2 = [1, 5, 6, 20];
const concatMethod=()=>{
    let concat = num.concat(num2);
    console.log(concat);
}

//Sort Method
let num3 = [3, 2, 1, 12, 10];
const sortMethod=()=>{
    let sorted = num3.sort();
    console.log(sorted);
}

//Sort Method in ascending order
const compareAsc=(a, b)=>{
    return a-b
}
const sortAsc=()=>{
    let sortAsc = num3.sort(compareAsc)
    console.log(sortAsc)
}

//Sort Method in dscending order
const compareDsc=(a, b)=>{
    return b-a
}
const sortDsc=()=>{
    let sortDsc = num3.sort(compareDsc)
    console.log(sortDsc)
}

//Splice Method
let num4 = [2, 5, 10, 15, 20, 21];
const spliceMethod=()=>{
    let num5 = [...num4]  //this puts a new copy of num4 into num5
    num5.splice(2, 4, 1000, 2000, 1050);
    let num6 = num5.splice()
    console.log(num4); // This gives output as [2, 5, 1000, 2000, 1050]
    console.log(num5); // Even this gives output as [2, 5, 1000, 2000, 1050]
    
}

pushMethod()
popMethod()
shiftMethod()
unShiftMethod()
deleteMethod()
concatMethod()
sortMethod()    
sortAsc()
sortDsc()
spliceMethod()