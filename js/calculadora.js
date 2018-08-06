function  calculateInstallment(priceBase){     
    var finalPrice = document.getElementById("finalPrice").value;                                               // Pega o valor do final price 

    var priceDiscount = priceBase - finalPrice;                                                                 // Calcula o valor o do desconto
    var percentageDiscount = (priceDiscount / priceBase) * 100;  

    if(percentageDiscount < 0 ){                                                                                // Mostra mensaga de acrescimo no valor
        document.getElementById("result").innerHTML = Math.abs(percentageDiscount).toFixed(0)+"% de ACRÉSCIMO";
    } else{
        document.getElementById("result").innerHTML = percentageDiscount.toFixed(0)+"% de DESCONTO";
    }                
                                               
    var installment = finalPrice / 12;                                                                          // Calcula o parcelamento do final price por 12
    document.getElementById("paymentInstallments").innerHTML = "12 parcelas de R$ "+ installment.toFixed(2);    // Mostra o valor do parcelamento na tela

}

function calculate_smart(){
    calculateInstallment(684);
}
function calculate_bussines(){
    calculateInstallment(1449);
}
function calculate_12pl(){    
    calculateInstallment(3096);
}
function calculate_24pl(){
    calculateInstallment(3576);
}
function calculate_48pl(){
    calculateInstallment(4248);  
}
function calculate_100pl(){
    calculateInstallment(5544)  ;
}