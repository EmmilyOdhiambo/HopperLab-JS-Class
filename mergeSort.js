// function divideArray(num){
// if(num.length<=1){
//     return num;
// }
//     let middle = Math.floor(num.length/2)
//     let left= num.slice(0,middle);
//     let right = num.slice(middle);
//     return sortedArray(divideArray(left),divideArray(right));
    
// }
// function sortedArray(left,right){
// let emptyArray = [];
// while(left.length && right.length){
//     if(left[0]<right[0]){
//      emptyArray.push(left.shift());
//     }
//     else{
//          emptyArray.push(right.shift());
//     }

// }
// return[...emptyArray,...left,...right]
// }

// let num = [10,2,3,4,56,8,11]
// console.log(divideArray(num))


// //merge sort
// function divideArrs(array){
//     if (array <= 1){
//         return array
//     }


// }

// // 2,6,10,14,18,22,26,30,34

// function divideArray(num){
//     if (num.length <= 1){
//         return num;
//     }
//     let middle = Math.floor(num.length / 2)
//     let left = num.slice(0,middle);
//     let right = num.slice(middle);
//     return sortedArray(divideArray(left),divideArray(right));
// }
// function sortedArray(left,right){
//     let emptyArray =[];
//     while(left.length && right.length){
//         if (left[0]<right[0]){
//             emptyArray.push(left.shift());
//         }else{
//             emptyArray.push(right.shift())}
//         }
    
//     return[...emptyArray,...left,...right]
//     }
//         let num =[12,6,9,14,8,22,26,30,34]
//         console.log(divideArray(num))
        // merge sort
        // function divideArrays(arrays){
        //     if (arrays <= 1){
        //         return arrays
        //     }
        // }
// // emmily stephanie
function binary(array,target){
    let left = 0
    let right = array.length -1
    while (left <= right);{
    let middle = Math.floor((left + right) /2)

    if (array[middle]===target){
    return middle}
   else if(array [middle]<target){
        left = middle +1
}
else{
    right = middle - 1
    
}

    }
    return null
}
let array = [6,8,9,12,14,22,26,30,34];
let target = 8;
console.log(binary(array,target));


function binary(num,tart){
    let left =0
    let right =num.length-1
    while(left<=right){
        let middle =Math.floor((left+right)/2)
if(num[middle]===tart){
    return middle
}
else if(num[middle]<tart){
    left =middle+1
}
else{
    right =middle-1
}
    }
    return null
}
let num =[6,10,14,18,22,26,30,34]
tart =18
console.log(binary(num,tart))