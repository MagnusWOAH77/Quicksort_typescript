export default function quicksort(array: Array<number>, lowIndex?: number, highIndex?: number):void {

    if (typeof lowIndex === "undefined") {
        lowIndex = 0;
    }
    if (typeof highIndex === "undefined") {
        highIndex = array.length - 1;
    }


    if (lowIndex >= highIndex) {
        return;
    }

    let pivotIndex = getRandomInt(lowIndex, highIndex);
    let pivot = array[highIndex];
    swap(array, pivotIndex, highIndex);

    let leftPointer = partition(array, lowIndex, highIndex, pivot)

    quicksort(array, lowIndex, leftPointer-1);

    quicksort(array, leftPointer+1, highIndex);

}

function partition(array: Array<number>, lowIndex: number, highIndex: number, pivot: number) {

    let leftPointer = lowIndex;
    let rightPointer = highIndex;

    while (leftPointer < rightPointer) {
        
        while (array[leftPointer] <= pivot && leftPointer < rightPointer) {
            leftPointer++;
        }

        while (array[rightPointer] >= pivot && leftPointer < rightPointer) {
            rightPointer--;
        }

        swap(array, leftPointer, rightPointer);

    }

    swap(array, leftPointer, highIndex);

    return leftPointer;
}

function swap(array: Array<number>, index1: number, index2: number) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}