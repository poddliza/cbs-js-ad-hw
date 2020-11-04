(function () {
    window.onload = function () {
        let pCounter = 0,
            paragraphCreators = document.getElementsByClassName("paragraphCreator");

        for (let i = 0; i < paragraphCreators.length; i++) {
            
            paragraphCreators[i].addEventListener('click', () => {
                
                addParagraph();

                setTimeout(() => {
                    let p = document.querySelectorAll('p');
        
                    if(p.length >= 10){
                        p.forEach(el => {
                            el.remove();
                        });
                        pCounter = 0;
                    }
                }, 100);
        
            });
        }

        function addParagraph() {
            let newP = document.createElement("p");

            pCounter ++;
            newP.innerHTML = "Paragraph " + pCounter;
            document.body.appendChild(newP);
        };
    }   

})();

