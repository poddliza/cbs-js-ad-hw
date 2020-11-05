let InteractiveString = {}

InteractiveString.setInteractiveString = function name(params) {
    window.onload = function() {

        InteractiveString.widget = document.getElementById('interactive-string-widget');
        InteractiveString.form = document.getElementById('interactive-string-form');
        InteractiveString.trigger = document.getElementById('interactive-string-trigger');
    
        InteractiveString.startString = function(){
            InteractiveString.input = document.getElementById('interactive-string-input');
            InteractiveString.instance = document.getElementById('interactive-string');
            InteractiveString.instance.innerHTML = InteractiveString.input.value;

            let stringStyles = getComputedStyle(InteractiveString.instance),
                stringInitialLeft = stringStyles.getPropertyValue("left").split('px')[0],
                stringWidth = InteractiveString.instance.offsetWidth;

            let movementInterval = setInterval(moveString, 300);

            function moveString(params) {
                let stringCurrentLeft = stringStyles.getPropertyValue("left").split('px')[0];

                // Специально не убрала этот console, так как из него видно непонятную мне ошибку. Если применить функцию, например, сперва к какому-нибудь короткому слову, а затем к какой-то длинной фразе, в консоли иногда все равно будет проскакивать ширина короткого слова - хотя переменная stringWidth перезаписывается каждый раз при применении функционала к новой строке...
                console.log("stringWidth: ", stringWidth);
                
                if(Number(stringCurrentLeft) <= Number("-" + (stringWidth))){
                    clearInterval(movementInterval);
                    InteractiveString.instance.style.transition = "left 0ms";
                    InteractiveString.instance.style.left = stringInitialLeft + "px";

                    setTimeout(function name(params) {
                        InteractiveString.instance.style.transition = "left 300ms linear";
                        movementInterval = setInterval(moveString, 300);
                    }, 100)

                }else{
                    InteractiveString.instance.style.left = stringCurrentLeft - 20 + "px";
                }
            }

        }
    
        InteractiveString.form.addEventListener('submit', (e) => {  
            e.preventDefault();      
            InteractiveString.startString();
        });
    
        
    }
}

InteractiveString.setInteractiveString();