window.onload = function() {
    let resultContainer = document.getElementById("result"),
        resultVal = 0,
        sum = function (){

            let query = location.search.substring(1),
                params = query.split("&");

            for (let i = 0; i < params.length; i++) {

                let pos = params[i].indexOf('=');
                if (pos == -1) { 
                    continue;
                }

                let argValue = Number(params[i].substring(pos + 1)); // Получение значения

                if(typeof argValue === 'number' && !isNaN(argValue)){
                    resultVal = resultVal + Number(argValue);
                }

            }

            resultContainer.innerHTML = resultVal;
        };

        sum();
}