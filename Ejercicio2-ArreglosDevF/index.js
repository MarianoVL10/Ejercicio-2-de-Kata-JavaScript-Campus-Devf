function generateRandomNumbers(){
    let randomNumbers = [ ]

    for(let i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 101);
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

let randomNumbers = generateRandomNumbers();
console.log(randomNumbers);

//? Step 2.
function convertStringToArray () {
    let userInput = prompt('Enter numbers separated by commas:');
    let stringArray = userInput.split(',');
    let numberArray = stringArray.map(Number);
    console.log(numberArray);
}

convertStringToArray();

//? Step 3
function sortNumbers(numbersArray){
    return numbersArray.sort((a, b) => a - b);
}

const numbers = [10,40,30,20,15,5];

const sortedNumbers = sortNumbers(numbers);

console.log(`Sorted array : ${sortedNumbers}`);
console.log(`Smallest number : ${sortedNumbers[0]}`);
console.log(`Largest number : ${sortedNumbers[sortedNumbers.length - 1]}`);

