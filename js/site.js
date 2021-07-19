function btnClick(){
    const start = parseInt(document.getElementById("startValue").value);
    const end = parseInt(document.getElementById("endValue").value);

    if (Number.isInteger(start) && Number.isInteger(end)) {

        if (start < end) {
            let numbers = [];

            numbers = generateNumbers(start, end);
    
            displayNumbers(numbers);
        } else {
            alert("The end value must be larger than the start value");
        }

        
    } else {
        alert("You must define integer values");
    }

}

function generateNumbers(start, end){
    let numbers = []
    let i = start;
    while (i <= end) {
        numbers.push(i);
        i++;
    }

    return numbers;
}

function displayNumbers(numbers){

    let templateCells = "";

    numbers.forEach(number => {
        templateCells += checkNumber(number);
    });

    document.getElementById("results").innerHTML = templateCells;

}


function checkNumber(number){

    if (number == 0 || number == 1) {
        return  `<div class="results-grid-item">
                    <span class="tooltiptext">${number} is not divisible</span>
                    <p class="prime">${number}</p>
                </div>`
    }  else if(number == 2){
        return `<div class="results-grid-item">
                    <span class="tooltiptext">${number} is not divisible</span>
                    <p class="prime even">${number}</p>
                </div>`
    }else if(Number.isInteger(Math.sqrt(number))){
        if (number % 2 == 0) {
            return `<div class="results-grid-item">
                        <span class="tooltiptext">${number} is the square of ${Math.sqrt(number)}</span>
                        <p class="square even">${number}</p>
                    </div>`
        } else {
            return `<div class="results-grid-item">
                        <span class="tooltiptext">${number} is the square of ${Math.sqrt(number)}</span>
                        <p class="square">${number}</p>
                    </div>`
        }
        
    } else if(number % 2 == 0){
        return `<div class="results-grid-item">
                    <span class="tooltiptext">${number} is divisible by 2</span>
                    <p class="even">${number}</p>
                </div>`
    } else {
        let divisor, i = 3;

        while (i <= Math.floor(Math.sqrt(number))) {
            if (number % i == 0) {
                return `<div class="results-grid-item">
                            <span class="tooltiptext">${number} is divisible by ${i}</span>
                            <p class="">${number}</p>
                        </div>`
            }
            i+=2;
        }

        return  `<div class="results-grid-item">
                    <span class="tooltiptext">${number} is not divisible</span>
                    <p class="prime">${number}</p>
                </div>`
    }
}