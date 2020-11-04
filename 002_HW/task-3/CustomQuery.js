let CustomQuery = {};

CustomQuery.name = "CustomQuerye module"; 

CustomQuery.getElWithClass = function (c) {
    console.log(document.querySelectorAll('.' + c).length);

    return document.querySelectorAll('.' + c);
}