const numbers = document.querySelector('.numbers');
// ^ Selects div class that DISPLAYS number inputs.
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    numbers.innerHTML = '';
    a = 0;
    b = 0;
    operator = '';
})
// ^ Clears display of all numbers (divs) that has been inputed

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '7';
    
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '8';
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '9';
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '4';
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '5';
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '6';
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '1';
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '2';
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '3';
});
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    let inputNumber = document.createElement('div');
    inputNumber.classList.add('divNums')
    numbers.appendChild(inputNumber);
    inputNumber.textContent = '0';
});


// ^ Inputs all numbers on button that is clicked onto the display

let a = 0
let b = 0
let operator;

let decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    let inputDecimal = document.createElement('div');
    inputDecimal.classList.add('divNums')
    numbers.appendChild(inputDecimal);
    inputDecimal.textContent = '.';

});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    let numbersToOperate = Array.from(document.querySelectorAll('div.divNums')).map(t => t.innerHTML).join('');
    b = parseFloat(numbersToOperate);
    
    console.log(b);
    operate(a, b);
    
    let inputOperator = document.createElement('div');
    numbers.appendChild(inputOperator);
    inputOperator.classList.add('operator')
    inputOperator.textContent = ' / '
    inputOperator.style.paddingLeft = '4px'
    inputOperator.style.paddingRight = '4px'
    
    document.querySelectorAll('div.divNums').forEach(e => e.classList.replace('divNums', 'divideIt'))

    let numbersToDivide = Array.from(document.querySelectorAll('div.divideIt')).map(t => t.innerHTML).join('');
    a = parseFloat(numbersToDivide);
    operator = 'divide';
    
    
});

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    let numbersToOperate = Array.from(document.querySelectorAll('div.divNums')).map(t => t.innerHTML).join('');
    b = parseFloat(numbersToOperate);
    


    
    
    operate(a, b);


    let inputOperator = document.createElement('div');
    numbers.appendChild(inputOperator);
    inputOperator.classList.add('operator')
    inputOperator.textContent = ' * '
    inputOperator.style.paddingLeft = '4px'
    inputOperator.style.paddingRight = '4px'

    document.querySelectorAll('div.divNums').forEach(e => e.classList.replace('divNums', 'multiplyIt'))

    let numbersToMultiply = Array.from(document.querySelectorAll('div.multiplyIt')).map(t => t.innerHTML).join('');
    a = parseFloat(numbersToMultiply);
    operator = 'multiply';
});

const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {

    let numbersToOperate = Array.from(document.querySelectorAll('div.divNums')).map(t => t.innerHTML).join('');
    b = parseFloat(numbersToOperate);
    


    
    console.log(b);
    operate(a, b);


    let inputOperator = document.createElement('div');
    numbers.appendChild(inputOperator);
    inputOperator.classList.add('operator')
    inputOperator.textContent = ' - '
    inputOperator.style.paddingLeft = '4px'
    inputOperator.style.paddingRight = '4px'

    document.querySelectorAll('div.divNums').forEach(e => e.classList.replace('divNums', 'subtractIt'))

    let numbersToSubtract = Array.from(document.querySelectorAll('div.subtractIt')).map(t => t.innerHTML).join('');
    a = parseFloat(numbersToSubtract);
    operator = 'subtract';
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    
    let numbersToOperate = Array.from(document.querySelectorAll('div.divNums')).map(t => t.innerHTML).join('');
    b = parseFloat(numbersToOperate);
   
    
    console.log(b);
    operate(a, b);
    
    let inputOperator = document.createElement('div');
    numbers.appendChild(inputOperator);
    inputOperator.classList.add('operator')
    inputOperator.textContent = ' + '
    inputOperator.style.paddingLeft = '4px'
    inputOperator.style.paddingRight = '4px'

    document.querySelectorAll('div.divNums').forEach(e => e.classList.replace('divNums', 'addIt'))

    let numbersToAdd = Array.from(document.querySelectorAll('div.addIt')).map(t => t.innerHTML).join('');
    a = parseFloat(numbersToAdd);
    operator = 'add';

    
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    
    

    let numbersToOperate = Array.from(document.querySelectorAll('div.divNums')).map(t => t.innerHTML).join('');
    b = parseFloat(numbersToOperate);
    console.log(b);
    operate(a, b);
    
    
    
});

const buttons = document.querySelectorAll('button');


console.log(a)
console.log(b)

function addition (a, b){
    return a + b;
}

function subtraction (a, b){
    return a - b;
}

function multiplication (a, b){
    return a * b;
}

function division (a, b){
    return a / b;
}


function operate (a, b){

    
    if (operator == 'divide'){
        let answer = division(a, b);
        document.querySelectorAll('.numbers div').forEach(item => item.remove('div'))
        let displayAnswer = document.createElement('div');
        numbers.appendChild(displayAnswer);
        displayAnswer.classList.add('divNums')
        displayAnswer.textContent = parseFloat(`${answer}`).toFixed(1);
        
        a = parseFloat(answer);
        console.log(a)
        
    } else if (operator == 'multiply'){
        let answer = multiplication(a, b);
        document.querySelectorAll('.numbers div').forEach(item => item.remove('div'))
        let displayAnswer = document.createElement('div');
        numbers.appendChild(displayAnswer);
        displayAnswer.classList.add('divNums')
        displayAnswer.textContent = parseFloat(`${answer}`).toFixed(1);
        
        a = parseFloat(answer);

    } else if (operator == 'subtract'){
        let answer = subtraction(a, b);
        document.querySelectorAll('.numbers div').forEach(item => item.remove('div'))
        let displayAnswer = document.createElement('div');
        numbers.appendChild(displayAnswer);
        displayAnswer.classList.add('divNums')
        displayAnswer.textContent = parseFloat(`${answer}`).toFixed(1);
        
        a = parseFloat(answer);

    } else if (operator == 'add'){
        let answer = addition(a, b);
        document.querySelectorAll('.numbers div').forEach(item => item.remove('div'))
        let displayAnswer = document.createElement('div');
        numbers.appendChild(displayAnswer);
        displayAnswer.classList.add('divNums')
        displayAnswer.textContent = parseFloat(`${answer}`).toFixed(1);
        
        a = parseFloat(answer);

    } 

    operator = null;
        
        
        

        
        
        

    


}

    
    


    
    
    
    
    
    
    
    
    
    
    
    
    

    




        
        
        

    



    


    
    


    
    
    
    
    
    
    
    
    
    
    
    
    

    



