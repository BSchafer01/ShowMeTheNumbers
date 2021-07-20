function btnClick(){
    const start = parseInt(document.getElementById("startValue").value);
    const end = parseInt(document.getElementById("endValue").value);
    const error = document.getElementById("error");

    if (Number.isInteger(start) && Number.isInteger(end)) {

        if (start < 0 || end < 0 || start > 9999 || end > 9999 ) {
            error.innerHTML = "The start and end values must be between 0 and 9999";
            error.classList.remove("none");
        }
        else if (start < end) {
            let numbers = [];
            error.classList.add("none");
            numbers = generateNumbers(start, end);
    
            displayNumbers(numbers);
        } else {
            error.innerHTML = "The end value must be larger than the start value";
            error.classList.remove("none");
        }

        
    } else {
        error.innerHTML = "You must define positive integer values";
        error.classList.remove("none");
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
    let results = document.getElementById("results");
    results.classList.remove("disabled");
    results.innerHTML = templateCells;

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