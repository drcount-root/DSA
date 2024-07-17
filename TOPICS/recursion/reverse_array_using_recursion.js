// Reverse an array using recursion

const reverseArrFn = (arr, start, end) => {
    if(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        reverseArrFn(arr, start+1, end-1);
    }    
    
    // console.log(arr)
    return arr;
}

const arr = [1, 2, 3, 4, 5]

console.log(reverseArrFn(arr, 0, arr.length -1))

