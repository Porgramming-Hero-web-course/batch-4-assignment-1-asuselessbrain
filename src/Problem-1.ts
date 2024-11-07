const sumOfArray = (array: number[]): number => {
    return array.reduce((sum, currentValue) => sum+currentValue, 0)
}

const array:number[] = [1, 2, 3, 4, 5]

const sum = sumOfArray(array)

console.log(sum)