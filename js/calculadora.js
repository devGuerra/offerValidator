function getPorcentage(finalPrice, basePrice12){ 
    var priceDiscount = basePrice12 - finalPrice;   
    var percentageDiscount = (priceDiscount / basePrice12) * 100;
    document.getElementById("result").innerHTML = percentageDiscount.toFixed(0)+"% de desconto";
}



function percentage12(){
    var finalPrice = document.getElementById("finalPrice").value;
    var basePrice12 = 3096;

    getPorcentage(finalPrice, basePrice12);
}
function percentage24(){
    var finalPrice = document.getElementById("finalPrice").value;
    var basePrice24 = 3576;

    getPorcentage(finalPrice, basePrice24);
}
function percentage48(){
    var finalPrice = document.getElementById("finalPrice").value;
    var basePrice48 = 4248;

    getPorcentage(finalPrice, basePrice48);
}
function percentage100(){
    var finalPrice = document.getElementById("finalPrice").value;
    var basePrice100 = 5544;

    getPorcentage(finalPrice, basePrice100);
    
}
