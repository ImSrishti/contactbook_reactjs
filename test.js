const arr = [
    { "name": "saransh", "age": 34, "marks": 233 },
    { "name": "saransh2", "age": 3, "marks": 533 },
    { "name": "vivek", "age": 6, "marks": 733 }
]

//map

// console.log(arr.map(x=>x.name))
// console.log(arr.map(x=>{
//     return [x.name,x.age]
//  }))
// console.log(arr.map(x=>{
//    return {"1":x.name,"2":x.age}
// }))

//filter

// console.log(arr.filter(x=>{
//     if(x.age>30){
//         return true
//     }else{
//         return false
//     }
// }))

// console.log(arr.filter(x=>{
    
//     var str = x.name
//     var patt = new RegExp("ar");
//     var res = patt.test(str);
//     if(res){
//         return true
//     }else{
//         return false
//     }
// }))

//sort
// arr.sort((x,y)=>{
//     if(x.marks>y.marks){
//         return -1
//     }else if(x.marks<y.marks){
//         return 1
//     }else{
//         return 0
//     }
// })

// console.log(arr)
