//================================================================================

//   ***** Cria o Payment Method depois de selecionar o Curso *****

function selectCourse(){

    var course = document.getElementById("course"); // variavel curso recebe do documento o ID curso
    var paymentMethod = document.getElementById("paymentMethod"); //variavel pagamento recebe do documento o ID pagamento

    var courseSelected = course.options[course.selectedIndex].value; // valor recebe nas opções de curso o valor o item selecionado

   //========================================================================================================

    //                         ===== removee os itens caso o Couse não seja selecionado ======

    var methodLength = paymentMethod.options.length; //quantidade recebe a quantidade de opções no pagamento
    var i; // cria a variavel i
    for(i = paymentMethod.options.length-1 ; i >= 0 ; i--) // enquanto a quantidade opções no pagamento
    {
        paymentMethod.remove(i);
    }

    var paymentSchedule = document.getElementById("paymentSchedule");

    var i; // cria a variavel i
    for(i = paymentSchedule.options.length-1 ; i >= 0 ; i--) // enquanto a quantidade opções no pagamento
    {
        paymentSchedule.remove(i);
    }

    //======================================================================================================

    // clear as checkboxes
    clear();
    clearResult();
    //======================================================================================================
    
    if( courseSelected == "brpt12"){

        var opcao = document.createElement("option");
        opcao.value = "selectMehord";
        opcao.text = "Payment Method";
        
        var opcao1 = document.createElement("option");
        opcao1.value = "creditCard";
        opcao1.text = "Credit Card";

        var opcao2 = document.createElement("option");
        opcao2.value = "boleto";
        opcao2.text = "Boleto";

        var opcao3 = document.createElement("option");
        opcao3.value = "bankTransfer";
        opcao3.text = "Bank Transfer";

        var opcao4 = document.createElement("option");
        opcao4.value = "paypalPagsguro";
        opcao4.text = "PayPal / PagSeguro";

        paymentMethod.add(opcao);
        paymentMethod.add(opcao1);
        paymentMethod.add(opcao2);
        paymentMethod.add(opcao3);
        paymentMethod.add(opcao4);


    } else if (courseSelected == "brpt24"){

        var opcao = document.createElement("option");
        opcao.value = "selectMethod";
        opcao.text = "Payment Method";
        
        var opcao11 = document.createElement("option");
        opcao11.value = "creditCard";
        opcao11.text = "Credit Card";

        var opcao12 = document.createElement("option");
        opcao12.value = "boleto";
        opcao12.text = "Boleto";

        var opcao13 = document.createElement("option");
        opcao13.value = "bankTransfer";
        opcao13.text = "Bank Transfer";

        var opcao14 = document.createElement("option");
        opcao14.value = "paypalPagsguro";
        opcao14.text = "Paypal / Pagsguro";

        paymentMethod.add(opcao);
        paymentMethod.add(opcao11);
        paymentMethod.add(opcao12);
        paymentMethod.add(opcao13);
        paymentMethod.add(opcao14);

    } else if (courseSelected == "brpt48"){

        var opcao = document.createElement("option");
        opcao.value = "selectMehord";
        opcao.text = "Payment Method";
        
        var opcao21 = document.createElement("option");
        opcao21.value = "creditCard";
        opcao21.text = "Credit Card";

        var opcao22 = document.createElement("option");
        opcao22.value = "boleto";
        opcao22.text = "Boleto";

        var opcao23 = document.createElement("option");
        opcao23.value = "bankTransfer";
        opcao23.text = "Bank Transfer";

        var opcao24 = document.createElement("option");
        opcao24.value = "paypalPagsguro";
        opcao24.text = "Paypal / Pagsguro";

        paymentMethod.add(opcao);
        paymentMethod.add(opcao21);
        paymentMethod.add(opcao22);
        paymentMethod.add(opcao23);
        paymentMethod.add(opcao24);
        
    } else if (courseSelected == "brpt100") {

        var opcao = document.createElement("option");
        opcao.value = "selectMehord";
        opcao.text = "Payment Method";
        
        var opcao31 = document.createElement("option");
        opcao31.value = "creditCard";
        opcao31.text = "Credit Card";

        var opcao32 = document.createElement("option");
        opcao32.value = "boleto";
        opcao32.text = "Boleto";

        var opcao33 = document.createElement("option");
        opcao33.value = "bankTransfer";
        opcao33.text = "Bank Transfer";

        var opcao34 = document.createElement("option");
        opcao34.value = "paypalPagsguro";
        opcao34.text = "Paypal / Pagsguro";

        paymentMethod.add(opcao);
        paymentMethod.add(opcao31);
        paymentMethod.add(opcao32);
        paymentMethod.add(opcao33);
        paymentMethod.add(opcao34);
    }
//===============================================================
//              payment schedule

}

//================================================================================

//  ***** Cria o Payment Schedule apos selecionr o Payment Method *****
function selectMethod(){
    
    var paymentMethod = document.getElementById("paymentMethod");
    var paymentSchedule = document.getElementById("paymentSchedule");

    var paymentSelected = paymentMethod.options[paymentMethod.selectedIndex].value;
    //======================================================================================================
//                             clear o Payment Schedule seja alterado
    var paymentLength = paymentSchedule.options.length; //quantidade recebe a quantidade de opções no pagamento
    var i; // cria a variavel i
    for(i = paymentSchedule.options.length-1 ; i >= 0 ; i--) // enquanto a quantidade opções no pagamento
    {
        paymentSchedule.remove(i);
    }

    //======================================================================================================
    //                  clear as Checkbox da pagina
    clear();
    clearResult();

    if( paymentSelected == "creditCard"){

        var opcao = document.createElement("option");
        opcao.value = "selectPayment";
        opcao.text = "Payment Schedule";

        var opcao1 = document.createElement("option");
        opcao1.value = "Automatic";
        opcao1.text = "Automatic";

        var opcao2 = document.createElement("option");
        opcao2.value = "Manual";
        opcao2.text = "Manual";

        var opcao3 = document.createElement("option");
        opcao3.value = "Single";
        opcao3.text = "Single";

        var opcao4 = document.createElement("option");
        opcao4.value = "semiAutomatic";
        opcao4.text = "Semi Automatic";

        paymentSchedule.add(opcao);
        paymentSchedule.add(opcao1);
        paymentSchedule.add(opcao2);
        paymentSchedule.add(opcao3);
        paymentSchedule.add(opcao4);


    } else if (paymentSelected == "boleto"){

        var opcao = document.createElement("option");
        opcao.value = "selectPayment";
        opcao.text = "Payment Schedule";

        var opcao11 = document.createElement("option");
        opcao11.value = "boletoManual";
        opcao11.text = "Manual";

        var opcao12 = document.createElement("option");
        opcao12.value = "boletoSingle";
        opcao12.text = "Single";


        paymentSchedule.add(opcao);
        paymentSchedule.add(opcao11);
        paymentSchedule.add(opcao12);

    } else if (paymentSelected == "bankTransfer"){

        var opcao = document.createElement("option");
        opcao.value = "selectPayment";
        opcao.text = "Payment Schedule";

        var opcao21 = document.createElement("option");
        opcao21.value = "Single";
        opcao21.text = "Single";


        paymentSchedule.add(opcao);
        paymentSchedule.add(opcao21);

        
    } else if (paymentSelected == "paypalPagsguro") {

        var opcao = document.createElement("option");
        opcao.value = "selectPayment";
        opcao.text = "Payment Schedule";

        var opcao31 = document.createElement("option");
        opcao31.value = "Automatic";
        opcao31.text = "Automatic";

        var opcao32 = document.createElement("option");
        opcao32.value = "Single";
        opcao32.text = "Single";

        paymentSchedule.add(opcao);
        paymentSchedule.add(opcao31);
        paymentSchedule.add(opcao32);

    }
}

//================================================================================

//  ***** Compara Curso e Pagamento (Mostra as Checkbox ) *****

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

        // aqui terminar o ciclo de condições
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

        // aqui terminar o ciclo de condições
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

        // aqui terminar o ciclo de condições
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

        // aqui terminar o ciclo de condições
    break

    }
    
}

//================================================================================



//================================================================================
// ***** Cria as Check Box com as ofertas *****


// ***** Ofertas Base *****
function bonusPL(){
    // seleciona o elemento pai
    var bonusPL = document.getElementById("bonusPL");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputbonusPL");
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Dobro de PLs"
    // Coloca o CheckBox no elemento Pai
    bonusPL.appendChild(checkBoxe);
    // Atribui o texto 
    bonusPL.appendChild(nome)


}
function bonusMonths(){
    // seleciona o elemento pai
    var bonusMonths = document.getElementById("bonusMonths");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputbonusMonths");
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Extensão de 2 meses"
    // Coloca o CheckBox no elemento Pai
    bonusMonths.appendChild(checkBoxe);
    // Atribui o texto 
    bonusMonths.appendChild(nome)


}
function bonusRescue(){
    // seleciona o elemento pai
    var bonusRescue = document.getElementById("bonusRescue");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputbonusRescue");
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Resgate de PLs"
    // Coloca o CheckBox no elemento Pai
    bonusRescue.appendChild(checkBoxe);
    // Atribui o texto 
    bonusRescue.appendChild(nome)
}

function offersBase(){

    bonusPL();
    bonusMonths();
    bonusRescue();
    
}


// ***** Ofertas sazonais *****

function offer10(){
    // seleciona o elemento pai
    var offer10 = document.getElementById("offer10");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputOffer10");
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Multa de 10%"
    // Coloca o CheckBox no elemento Pai
    offer10.appendChild(checkBoxe);
    // Atribui o texto 
    offer10.appendChild(nome)
}
function offer10da(){
    // seleciona o elemento pai
    var offer10da = document.getElementById("offer10da");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id", "inputOffer10da")
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Multa de 10%"
    // Coloca o CheckBox no elemento Pai
    offer10da.appendChild(checkBoxe);
    // Atribui o texto 
    offer10da.appendChild(nome)
}
function bonus1real(){
    // seleciona o elemento pai
    var bonus1real = document.getElementById("bonus1real");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputBonus1real")
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Primeira de R$1"
    // Coloca o CheckBox no elemento Pai
    bonus1real.appendChild(checkBoxe);
    // Atribui o texto 
    bonus1real.appendChild(nome)
}
function offer12x(){
    // seleciona o elemento pai
    var offer12x = document.getElementById("offer12x");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputOffer12x")
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Boleto em mais de 10x";
    // Coloca o CheckBox no elemento Pai
    offer12x.appendChild(checkBoxe);
    // Atribui o texto 
    offer12x.appendChild(nome)
}
function offerPoints(){
    // seleciona o elemento pai
    var offerPoints = document.getElementById("offerPoints");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    checkBoxe.setAttribute("id","inputofferPoints")
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Pontos do Portal";
    // Coloca o CheckBox no elemento Pai
    offerPoints.appendChild(checkBoxe);
    // Atribui o texto 
    offerPoints.appendChild(nome)
}
//================================================================================

// Mensagem de autorizado ou não autorizado

function notPass(){

    clearResult();

    var valide = document.getElementById("valideorNot");
    var textValide = document.createElement("h3");
    textValide.setAttribute("class", "invalidPass")

    textValide.textContent = "Oferta Inválida";

    valide.appendChild(textValide);
}
function Pass(){
    
    clearResult();
    var valide = document.getElementById("valideorNot");
    var textValide = document.createElement("h3");
    textValide.setAttribute("class", "validePass")

    textValide.textContent = "Oferta Válida";

    valide.appendChild(textValide);

}

//================================================================================

// Valida os itens selecionados na checkbox e compara as ofertas

function validateAutomtic(){
    // limpa os resultados anteriores
    clearResult();

    // Verifica quais checkbox são "true"
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    
    var offer10 = document.getElementById("inputOffer10").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;

    // soma quantas checkbox foram selecionadas
    var offers = bonusPL + bonusRescue + bonusMonths + offer10 + offerPoints;

    // verifica se alguma das combinações não autorizadas esta selecionada
    if(bonusPL && bonusRescue == true || offerPoints == true && offers >= 3){
        notPass();
        // Verifica qual a combinação e exibe uma mensagem para o usuario
       if (bonusPL && bonusRescue == true ){

            // Selecionao o elemento no html 
            var textId = document.getElementById("validateResult");
            // cria uma tag H3
            var createText = document.createElement("h3");
            // Coloca a mensagem dentro da tag h3
            createText.textContent = "- PL bonus com Resgate, não autorizado";
            // Coloca a tag h3 com a mensagem no elemento e aparece na tela
            textId.appendChild(createText);
        }
        if (offerPoints == true && offers >= 3){
            // Selecionao o elemento no html 
            var textId = document.getElementById("validateResult");
            // cria uma tag H3
            var createText = document.createElement("h3");
            // Coloca a mensagem dentro da tag h3
            createText.textContent = "- Pontos do Portal com mais de uma Oferta";
            // Coloca a tag h3 com a mensagem no elemento e aparece na tela
            textId.appendChild(createText);
        }
    } else {
        // mostra a mensagem de "AUTORIZADO" na tela
        Pass();
    }


    
}

function validateManual(){
    // limpa os resultados anteriores
    clearResult();
    // Verifica quais checkbox são "true"   
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    
    var offer10da = document.getElementById("inputOffer10da").checked;
    var bonus1real = document.getElementById("inputBonus1real").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    // soma quantas checkbox foram selecionadas
    var offers = bonusPL +  bonusRescue +  bonusMonths +  offer10da +  bonus1real +  offerPoints;
    // verifica se alguma das combinações não autorizadas esta selecionada
    if ( bonusPL && bonusRescue == true ||  offer10da == true || offerPoints && bonus1real == true || offerPoints == true && offers >= 3 ){
        notPass();
        // Verifica qual a combinação e exibe uma mensagem para o usuario
        if ( bonusPL && bonusRescue == true){
            // Selecionao o elemento no html 
            var textId = document.getElementById("validateResult");
            // cria uma tag H3
            var createText = document.createElement("h3");
            // Coloca a mensagem dentro da tag h3        
            createText.textContent = "- Oferta de PL bonus e Resgate não autorizada";
            // Coloca a tag h3 com a mensagem no elemento e aparece na tela
            textId.appendChild(createText);
    
    
        } 
        if  ( offer10da == true){
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Multa de 10% no manual";
        
            textId.appendChild(createText);
                  
    
        }
        if (offerPoints && bonus1real == true){
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Pontos do Portal  + 1 real não autorizado";
        
            textId.appendChild(createText);
            
    
        } 
        if (offerPoints == true && offers >= 3  ) {
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Pontos do Portal com mais de uma Oferta";
        
            textId.appendChild(createText);
    
        }  
            
    }  else {
        Pass();
    }

}

function validateSingle(){
    // limpa os resultados anteriores
    clearResult();
    // Verifica quais checkbox são "true"
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    
    var offer10 = document.getElementById("inputOffer10").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    // soma quantas checkbox foram selecionadas
    var offers = bonusPL + bonusRescue + bonusMonths + offer10 + offerPoints;
    // verifica se alguma das combinações não autorizadas esta selecionada       
    if(bonusPL && bonusRescue == true || offerPoints == true && offers >= 3){
        notPass();
        // Verifica qual a combinação e exibe uma mensagem para o usuario
        if (bonusPL && bonusRescue == true ){
            // Selecionao o elemento no html 
            var textId = document.getElementById("validateResult");
            // cria uma tag H3
            var createText = document.createElement("h3");
            // Coloca a mensagem dentro da tag h3
            createText.textContent = "- Oferta de PL bonus e Resgate não autorizada";
            // Coloca a tag h3 com a mensagem no elemento e aparece na tela
            textId.appendChild(createText);
        }
        if (offerPoints == true && offers >= 3){

            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Pontos do Portal com mais de uma Oferta";
        
            textId.appendChild(createText);
        }
    } else {
        // mostra a mensagem de "AUTORIZADO" na tela
        Pass();
    }
 
 
    
}

function validateSemiauto (){
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    clearResult();
    var offer10da = document.getElementById("inputOffer10da").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;

    var offers = bonusPL +  bonusRescue +  bonusMonths +  offer10da +  offerPoints;

    if ( bonusPL && bonusRescue == true ||  offer10da == true ||  offerPoints == true && offers >= 3){
        if ( bonusPL && bonusRescue == true){
            notPass();
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
    
        
            createText.textContent = "- Oferta de PL bonus e Resgate não autorizada";
        
            textId.appendChild(createText);
    
    
        } 
        if  ( offer10da == true){
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Ofertas de 10% no manual apenas com DA";
        
            textId.appendChild(createText);
                  
    
        }
        if (offerPoints == true && offers >= 3) {
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Pontos do Portal com mais de uma Oferta";
        
            textId.appendChild(createText);
    
        }  
            
    }  else {
        Pass();
    }

}

function validateBoletoManual(){
    // limpa os resultados anteriores
    clearResult();
    // Verifica quais checkbox são "true"   
    var bonusPL = document.getElementById("inputbonusPL").checked;
    var bonusRescue = document.getElementById("inputbonusRescue").checked;
    var bonusMonths = document.getElementById("inputbonusMonths").checked;
    
    var offer10da = document.getElementById("inputOffer10da").checked;
    var offer12x = document.getElementById("inputOffer12x").checked;
    var offerPoints = document.getElementById("inputofferPoints").checked;
    // soma quantas checkbox foram selecionadas
    var offers = bonusPL +  bonusRescue +  bonusMonths +  offer10da +  offerPoints + offer12x;
    notPass();
    // verifica se alguma das combinações não autorizadas esta selecionada
    if ( bonusPL && bonusRescue == true ||  offer10da == true || offer12x == true || offerPoints == true && offers >= 3 ){
        // Verifica qual a combinação e exibe uma mensagem para o usuario
        if ( bonusPL && bonusRescue == true){
            // Selecionao o elemento no html 
            var textId = document.getElementById("validateResult");
            // cria uma tag H3
            var createText = document.createElement("h3");
            // Coloca a mensagem dentro da tag h3        
            createText.textContent = "- Oferta de PL bonus e Resgate não autorizada";
            // Coloca a tag h3 com a mensagem no elemento e aparece na tela
            textId.appendChild(createText);
    
    
        } 
        if  ( offer10da == true){
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Ofertas de 10% no manual apenas com DA";
        
            textId.appendChild(createText);
                  
    
        }
        if (offer12x == true){
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Boleto com mais de 10 parcelas";
        
            textId.appendChild(createText);
            
    
        } 
        if (offerPoints == true && offers >= 3) {
    
            var textId = document.getElementById("validateResult");
            var createText = document.createElement("h3");
        
            createText.textContent = "- Pontos do Portal com mais de uma Oferta";
        
            textId.appendChild(createText);
    
        }  
            
    }  else {
        Pass();
    }

}



//================================================================================
// Verifica qual Schedule do pagamento e seleciona a validação correta de checkbox
function validateSchedule(){
    var paymentSchedule = document.getElementById("paymentSchedule").value;
    

    if ( paymentSchedule == "Automatic"){

        validateAutomtic()

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



//================================================================================
// ***** Cria as Check Box com as ofertas *****

//  ***** Apaga as checkBox das tela *****

function clear(){
    document.getElementById("bonusPL").innerHTML = "";
    document.getElementById("bonusMonths").innerHTML = "";
    document.getElementById("bonusRescue").innerHTML = "";

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
