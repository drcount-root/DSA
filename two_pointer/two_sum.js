const twoPointerAlgo = function (arr, length, targetSum) {
    const sortedArr = arr.sort((a, b)=> a - b);
    let startPointer = 0;
    let endPointer = length - 1;
    const result = [];

    while(startPointer < endPointer){
        if(sortedArr[startPointer] + sortedArr[endPointer] === targetSum){
            result.push([sortedArr[startPointer], sortedArr[endPointer]]);
            startPointer += 1;
            endPointer -= 1;
        }

        else if(sortedArr[startPointer] + sortedArr[endPointer] < targetSum) {
            startPointer += 1;
        }

        else{
            endPointer -= 1;
        }
    }

    return result;
}

console.log(twoPointerAlgo([3, 5, 1, 7, 4, 4, 2, 6], 8, 8));
