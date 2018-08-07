//======================================================================================================
//======================================================================================================
function createOptions(optionNumber, valueContent, textContent, payment){ // Função para criar novas Opções no select
    
    var optionNumber = document.createElement("option");
    optionNumber.value = valueContent;
    optionNumber.text = textContent;
    payment.add(optionNumber)
    return;
    
}

//======================================================================================================
//                                          Payment Method
//                       ***** Cria o Payment Method depois de selecionar o Curso *****
//======================================================================================================

function selectCourse(){

    var course = document.getElementById("course"); // variavel curso recebe do documento o ID curso
    var paymentMethod = document.getElementById("paymentMethod"); //variavel pagamento recebe do documento o ID pagamento

    var courseSelected = course.options[course.selectedIndex].value; // valor recebe nas opções de curso o valor o item selecionado

   //========================================================================================================
    //                         ===== remove os itens caso o Course não seja selecionado ======
    var i; // cria a variavel i
    for(i = paymentMethod.options.length-1 ; i >= 0 ; i--)  // enquanto a quantidade opções no pagamento
    {
        paymentMethod.remove(i);
    }

    var paymentSchedule = document.getElementById("paymentSchedule");

    var i; // cria a variavel i
    for(i = paymentSchedule.options.length-1 ; i >= 0 ; i--)// enquanto a quantidade opções no pagamento
    {
        paymentSchedule.remove(i);
    }

    //======================================================================================================
    // clear as checkboxes
    clear();
    clearResult();
    //======================================================================================================
    
    if( courseSelected == "brpt12"){

        createOptions("option","selectMehord","Payment Method",paymentMethod )

        createOptions("option1", "creditCard","Credit Card",paymentMethod);        
        
        createOptions("option2","boleto","Boleto",paymentMethod)

        createOptions("option3","bankTransfer","Bank Transfer",paymentMethod )

        createOptions("option3","paypalPagsguro","PayPal / PagSeguro",paymentMethod );

    } else if (courseSelected == "brpt24"){

        createOptions("option","selectMethod","Payment Method", paymentMethod);

        createOptions("option1","creditCard","Credit Card", paymentMethod);
        
        createOptions("option2","boleto","Boleto", paymentMethod);
        
        createOptions("option3","bankTransfer","Bank Transfer",paymentMethod);
        
        createOptions("option4","paypalPagsguro","Paypal / PagSeguro", paymentMethod);
        
    } else if (courseSelected == "brpt48"){

        createOptions("option","selectMethod","Payment Method", paymentMethod);

        createOptions("option1","creditCard","Credit Card", paymentMethod);
        
        createOptions("option2","boleto","Boleto", paymentMethod);
        
        createOptions("option3","bankTransfer","Bank Transfer",paymentMethod);
        
        createOptions("option4","paypalPagsguro","Paypal / PagSeguro", paymentMethod);
        
    } else if (courseSelected == "brpt100") {

        createOptions("option","selectMethod","Payment Method", paymentMethod);

        createOptions("option1","creditCard","Credit Card", paymentMethod);
        
        createOptions("option2","boleto","Boleto", paymentMethod);
        
        createOptions("option3","bankTransfer","Bank Transfer",paymentMethod);
        
        createOptions("option4","paypalPagsguro","Paypal / PagSeguro", paymentMethod);
    }
}
//======================================================================================================
//                                         payment schedule
//                 ***** Cria o Payment Schedule apos selecionr o Payment Method *****
//======================================================================================================    


function selectMethod(){
    
    var paymentMethod = document.getElementById("paymentMethod");
    var paymentSchedule = document.getElementById("paymentSchedule");
    var paymentSelected = paymentMethod.options[paymentMethod.selectedIndex].value;
    //======================================================================================================
    //                             clear o Payment Schedule seja alterado

    var i; // cria a variavel i
    for(i = paymentSchedule.options.length-1 ; i >= 0 ; i--)    // enquanto a quantidade opções no pagamento
    {
        paymentSchedule.remove(i);
    }

    //======================================================================================================
    //                               clear as Checkbox da pagina
    clear();
    clearResult();

    if( paymentSelected == "creditCard"){

        createOptions("option","selectPayment","Payment Schedule",paymentSchedule);

        createOptions("option1","Automatic","Automatic",paymentSchedule);

        createOptions("option2","Manual","Manual",paymentSchedule);
        
        createOptions("option3","Single","Single",paymentSchedule);
        
        createOptions("option4","semiAutomatic","Semi Automatic",paymentSchedule)
        
    } else if (paymentSelected == "boleto"){

        createOptions("option","selectPayment", "Payment Schedule",paymentSchedule);

        createOptions("option1","boletoManual","Manual",paymentSchedule);

        createOptions("option2","boletoSingle","Single",paymentSchedule);

    } else if (paymentSelected == "bankTransfer"){

        createOptions("option", "selectPayment","Payment Schedule",paymentSchedule);

        createOptions("option1","Single","Single",paymentSchedule);
  
    } else if (paymentSelected == "paypalPagsguro") {

        createOptions("option","selectPayment","Payment Schedule",paymentSchedule);

        createOptions("option1","Automatic","Automatic",paymentSchedule);

        createOptions("option2","Single","Single",paymentSchedule);
        
    }
}
//======================================================================================================
//                                            Checkbox    
//                         ***** Cria as Check Box com as ofertas *****
//======================================================================================================


function insertCheckBox(bonus, input, text){                        // Função para criar novas Checkbox
    var bonusPL = document.getElementById(bonus);   // seleciona o elemento pai
    var checkBoxe = document.createElement("input");//cria o elemento e seleciona o atribudo checkbox
    checkBoxe.setAttribute("type", "checkbox");     // define como Checkbox o input criado
    checkBoxe.setAttribute("id",input);             // adiciona um ID na checkbox criada
    var nome = document.createElement("label");     // Adiciona o elemento para adicionar o texto no checkbox
    nome.textContent = text;                        // Insere o texto no elemento criado
    bonusPL.appendChild(checkBoxe);                 // Coloca o CheckBox no elemento Pai   
    bonusPL.appendChild(nome)                       // Atribui o texto no id

}

// ***** Ofertas Base *****

function bonusPL(){

    insertCheckBox("bonusPL", "inputbonusPL", "Dobro de PLs");   
}
function bonusMonths(){

    insertCheckBox("bonusMonths", "inputbonusMonths", "Extensão de 2 meses"); 
}
function bonusRescue(){

    insertCheckBox("bonusRescue","inputbonusRescue", "Resgate de PLs");
}
function bonus50(){

    insertCheckBox("bonus50", "inputbonus50","Desconto de 40 a 50%" );
}
function offersBase(){

    bonusPL();
    bonusMonths();
    bonusRescue();
    bonus50();
}

// ***** Ofertas sazonais *****

function offer10(){

    insertCheckBox("offer10","inputOffer10","Multa de 10%" );
}
function offer10da(){

    insertCheckBox("offer10da","inputOffer10da","Multa de 10%");
}
function bonus1real(){

    insertCheckBox("bonus1real","inputBonus1real","Primeira de R$1");
}
function offer12x(){

    insertCheckBox("offer12x","inputOffer12x","Boleto em mais de 10x");
}
function offerPoints(){

    insertCheckBox("offerPoints","inputofferPoints","Pontos do Portal");
}
//======================================================================================================
//                  ***** Compara Curso e Pagamento (Mostra as Checkbox ) *****
//======================================================================================================


function offerCourse(){

    var course = document.getElementById("course").value;
    var paymentMethod = document.getElementById("paymentMethod").value;
    var paymentSchedule = document.getElementById("paymentSchedule").value;

    var saleCourse = course +"_"+ paymentMethod +"_"+ paymentSchedule;
    clear();
    clearResult();

    switch(saleCourse){
        case "brpt12_creditCard_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt12_creditCard_Manual":

        offersBase();
        offer10da();
        bonus1real();
        offerPoints();

    break
        case "brpt12_creditCard_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt12_creditCard_semiAutomatic":

        offersBase();
        offer10da();
        offerPoints();

    break
        case "brpt12_boleto_boletoManual":

        offersBase();
        offer10da();
        offer12x();
        offerPoints();

    break
        case "brpt12_boleto_boletoSingle":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt12_bankTransfer_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt12_paypalPagsguro_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt12_paypalPagsguro_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt24_creditCard_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt24_creditCard_Manual":

        offersBase();
        offer10da();
        bonus1real();
        offerPoints();

    break
        case "brpt24_creditCard_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt24_creditCard_semiAutomatic":

        offersBase();
        offer10da();
        offerPoints();

    break
        case "brpt24_boleto_boletoManual":

        offersBase();
        offer10da();
        offer12x();
        offerPoints();

    break
        case "brpt24_boleto_boletoSingle":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt24_bankTransfer_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt24_paypalPagsguro_Automatic":

        offersBase();
        offer10da();
        offerPoints();

    break
        case "brpt24_paypalPagsguro_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt48_creditCard_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt48_creditCard_Manual":

        offersBase();
        offer10da();
        bonus1real();
        offerPoints();

    break
        case "brpt48_creditCard_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt48_creditCard_semiAutomatic":

        offersBase();
        offer10da();
        offerPoints();

    break
        case "brpt48_boleto_boletoManual":

        offersBase();
        offer10da();
        offer12x();
        offerPoints();

    break
        case "brpt48_boleto_boletoSingle":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt48_bankTransfer_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt48_paypalPagsguro_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt48_paypalPagsguro_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt100_creditCard_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt100_creditCard_Manual":

        offersBase();
        offer10da();
        bonus1real();
        offerPoints();

    break
        case "brpt100_creditCard_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt100_creditCard_semiAutomatic":

        offersBase();
        offer10da();
        offerPoints();

    break
        case "brpt100_boleto_boletoManual":

        offersBase();
        offer10da();
        offer12x();
        offerPoints();

    break
        case "brpt100_boleto_boletoSingle":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt100_bankTransfer_Single":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt100_paypalPagsguro_Automatic":

        offersBase();
        offer10();
        offerPoints();

    break
        case "brpt100_paypalPagsguro_Single":

        offersBase();
        offer10();
        offerPoints();

    break

    }
    
}

//======================================================================================================
//                          Mensagem de autorizado ou não autorizado
//======================================================================================================



function passpass(){                         // Mostra o texto Oferta Valida
    var valide = document.getElementById("valideorNot");

    valide.setAttribute("class", "validePass")

    valide.textContent = "Oferta Válida";

} 

//======================================================================================================
//                     Valida os itens selecionados na checkbox e compara as ofertas
//======================================================================================================


function reduzirValidador( valordoIf, textValue){
    
    var valide = document.getElementById("valideorNot");
    var textId = document.getElementById("validateResult");
    var createText = document.createElement("h3");
    


    if ( valordoIf ){
        valide.setAttribute("class", "invalidPass");
        valide.textContent = "Oferta Inválida";

        createText.textContent = textValue;
        textId.appendChild(createText)

    }

}
///////////////////////////////////////////////////////////////////////////////////
function validateAutomatic(){
    clearResult();  // limpa os resultados anteriores
    var bonusPL = document.getElementById("inputbonusPL").checked;     // Verifica quais checkbox são "true"
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    var offer10 = document.getElementById("inputOffer10").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    var bonus50 = document.getElementById("inputbonus50").checked;
    
    var offers = bonusPL + bonusRescue + bonusMonths + offer10 + offerPoints + bonus50;

    passpass();

    reduzirValidador(bonusPL && bonusMonths, "- Dobro de Aulas com Meses Bonus, não autorizado");

    reduzirValidador(bonusPL && bonusRescue,"- Dobro de Aulas com Resgate, não autorizado" );

    reduzirValidador(offerPoints &&  offers >= 3, "- Pontos do Portal com mais de uma Oferta");

    reduzirValidador(offerPoints && bonus50,"- Pontos do Portal com mais de 40% de desconto" );
    
    reduzirValidador(offerPoints && bonusRescue,"- Pontos do Portal com Resgate não é autorizado. Pontos é valido apenas para alunos NEW" );


 
}

function validateManual(){
    clearResult();  
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;  
    var offer10da = document.getElementById("inputOffer10da").checked;
    var bonus1real = document.getElementById("inputBonus1real").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    var bonus50 = document.getElementById("inputbonus50").checked;

    var offers = bonusPL + bonusRescue + bonusMonths + offer10da + bonus1real + offerPoints + bonus50;

    passpass();

    reduzirValidador(bonusPL && bonusMonths, "- Dobro de Aulas com Meses Bonus, não autorizado");

    reduzirValidador(bonusPL && bonusRescue,"- Dobro de Aulas com Resgate, não autorizado" );

    reduzirValidador(offerPoints &&  offers >= 3, "- Pontos do Portal com mais de uma Oferta");

    reduzirValidador(offerPoints && bonus50,"- Pontos do Portal com mais de 40% de desconto" );

    reduzirValidador(offerPoints && bonus1real,"- Pontos do Portal  + 1 real não autorizado" );
  
    reduzirValidador(offerPoints && bonusRescue,"- Pontos do Portal com Resgate não é autorizado. Pontos é valido apenas para alunos NEW" );

    reduzirValidador(offer10da,"- Multa de 10% no manual" );
}

function validateSingle(){
    clearResult();
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;  
    var offer10 = document.getElementById("inputOffer10").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    var bonus50 = document.getElementById("inputbonus50").checked;

    var offers = bonusPL + bonusRescue + bonusMonths + offer10 + offerPoints + bonus50;
    
    passpass();
    
    reduzirValidador(bonusPL && bonusMonths, "- Dobro de Aulas com Meses Bonus, não autorizado");

    reduzirValidador(bonusPL && bonusRescue,"- Dobro de Aulas com Resgate, não autorizado" );

    reduzirValidador(offerPoints &&  offers >= 3, "- Pontos do Portal com mais de uma Oferta");

    reduzirValidador(offerPoints && bonus50,"- Pontos do Portal com mais de 40% de desconto" ); 
}

function validateSemiauto (){
    clearResult();
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    var offer10da = document.getElementById("inputOffer10da").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    var bonus50 = document.getElementById("inputbonus50").checked;

    var offers = bonusPL + bonusRescue + bonusMonths + offer10da + offerPoints + bonus50; 

    passpass();

    reduzirValidador(bonusPL && bonusMonths, "- Dobro de Aulas com Meses Bonus, não autorizado");

    reduzirValidador(bonusPL && bonusRescue,"- Dobro de Aulas com Resgate, não autorizado" );

    reduzirValidador(offerPoints &&  offers >= 3, "- Pontos do Portal com mais de uma Oferta");

    reduzirValidador(offerPoints && bonus50,"- Pontos do Portal com mais de 40% de desconto" ); 
    
    reduzirValidador(offerPoints && bonusRescue,"- Pontos do Portal com Resgate não é autorizado. Pontos é valido apenas para alunos NEW" );

    reduzirValidador(offer10da,"- Ofertas de 10% no manual apenas com DA" )


}

function validateBoletoManual(){
    clearResult();  
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    var offer10da = document.getElementById("inputOffer10da").checked;
    var offer12x = document.getElementById("inputOffer12x").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    var bonus50 = document.getElementById("inputbonus50").checked;


    var textId = document.getElementById("validateResult");

    var valide = document.getElementById("valideorNot");
    var textValide = document.createElement("h3");

    var offers = bonusPL +  bonusRescue +  bonusMonths +  offer10da +  offerPoints + offer12x;

    passpass();

    reduzirValidador(bonusPL && bonusMonths, "- Dobro de Aulas com Meses Bonus, não autorizado");

    reduzirValidador(bonusPL && bonusRescue,"- Dobro de Aulas com Resgate, não autorizado" );

    reduzirValidador(offerPoints &&  offers >= 3, "- Pontos do Portal com mais de uma Oferta");

    reduzirValidador(offerPoints && bonus50,"- Pontos do Portal com mais de 40% de desconto" ); 
    
    reduzirValidador(offerPoints && bonusRescue,"- Pontos do Portal com Resgate não é autorizado. Pontos é valido apenas para alunos NEW" );

    reduzirValidador(offer10da,"- Ofertas de 10% no manual apenas com DA");

    reduzirValidador(offer12x,"- Boleto com mais de 10 parcelas"); 




}
//======================================================================================================
//          Verifica qual Schedule do pagamento e seleciona a validação correta de checkbox
//======================================================================================================

function validateSchedule(){
    var paymentSchedule = document.getElementById("paymentSchedule").value;
    
    if ( paymentSchedule == "Automatic"){

        validateAutomatic()
    } else if (paymentSchedule == "Manual"){

        validateManual()
    } else if(paymentSchedule == "Single"|| paymentSchedule == "boletoSingle"  ){

        validateSingle()
    } else if(paymentSchedule == "semiAutomatic"){

        validateSemiauto()
    } else if(paymentSchedule == "boletoManual"){

        validateBoletoManual()
    }
}
//======================================================================================================
//                          ***** Apaga as checkBox das tela *****
//======================================================================================================

function clear(){
    document.getElementById("bonusPL").innerHTML = "";
    document.getElementById("bonusMonths").innerHTML = "";
    document.getElementById("bonusRescue").innerHTML = "";
    document.getElementById("bonus50").innerHTML = "";

    document.getElementById("offer10").innerHTML = "";
    document.getElementById("offer10da").innerHTML = "";
    document.getElementById("bonus1real").innerHTML = "";
    document.getElementById("offer12x").innerHTML = "";
    document.getElementById("offerPoints").innerHTML = "";

}
function clearResult(){
    document.getElementById("validateResult").innerHTML = "";
    document.getElementById("valideorNot").innerHTML = "";
}
