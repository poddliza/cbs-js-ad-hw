window.onload = function() {
    let resultContainer = document.getElementById("result");

    let calculate = function (){
        let pattern = /\d [\+\-\/\*]{1} \d/,
            expression = prompt('Add an expression for the calculation using next format:\n"number +(or "-" or "*" or "/") number"'),
            expTest = pattern.test(expression);
    
        if(expTest){
            let args = expression.split(" "),
                operator = args[1],
                resultVal;

            if(operator === '+'){
                resultVal = Number(args[0]) + Number(args[2]);
            }else if(operator === '-'){
                resultVal = Number(args[0]) - Number(args[2]);
            }else if(operator === '*'){
                resultVal = Number(args[0]) * Number(args[2]);
            }else if(operator === '/'){
                resultVal = Number(args[0]) / Number(args[2]);
            }

            resultContainer.innerHTML = resultVal;

        }else{
            resultContainer.innerHTML = 'Invalid expression format. Please, reload the page and try again.';
        }
    };

    calculate();

}