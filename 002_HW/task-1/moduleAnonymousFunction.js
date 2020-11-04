(function () {

    var name = "Anonymous-function module",
        setParagraphText = function () {

            window.onload = function () {
                var p = document.getElementsByTagName("p");
    
                for (var i = 0; i < p.length; i++) {
                    p[i].innerHTML = "PARAGRAPH";
                }
            }

            console.log("Function was called using " + name);
        };

    setParagraphText();

})();