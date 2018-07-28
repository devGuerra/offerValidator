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
    clear()
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
        opcao4.text = "Paypal / Pagsguro";

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
    clear()

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
        opcao11.value = "Manual";
        opcao11.text = "Manual";

        var opcao12 = document.createElement("option");
        opcao12.value = "Single";
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

    switch(saleCourse){
        case "brpt12_creditCard_Automatic":

        offersBase();
        offer10();


    break
        case "brpt12_creditCard_Manual":

        offersBase();
        offer10da();

    break
        case "brpt12_creditCard_Single":

        offersBase();
        offer10();

    break
        case "brpt12_creditCard_semiAutomatic":

        offersBase();
        offer10da();

    break
        case "brpt12_boleto_Manual":

        offersBase();
        offer10da();

    break
        case "brpt12_boleto_Single":

        offersBase();
        offer10();

    break
        case "brpt12_bankTransfer_Single":

        offersBase();
        offer10();

    break
        case "brpt12_paypalPagsguro_Automatic":

        offersBase();
        offer10();

    break
        case "brpt12_paypalPagsguro_Single":

        offersBase();
        offer10();

        // aqui terminar o ciclo de condições
    break
        case "brpt24_creditCard_Automatic":

        offersBase();
        offer10();
 
    break
        case "brpt24_creditCard_Manual":

        offersBase();
        offer10da();

    break
        case "brpt24_creditCard_Single":

        offersBase();
        offer10();

    break
        case "brpt24_creditCard_semiAutomatic":

        offersBase();
        offer10da();

  
    break
        case "brpt24_boleto_Manual":

        offersBase();
        offer10da();

  
    break
        case "brpt24_boleto_Single":

        offersBase();
        offer10();


 
    break
        case "brpt24_bankTransfer_Single":

        offersBase();
        offer10();


    break
        case "brpt24_paypalPagsguro_Automatic":

        offersBase();
        offer10da();

    break
        case "brpt24_paypalPagsguro_Single":

        offersBase();
        offer10();

        // aqui terminar o ciclo de condições
    break
        case "brpt48_creditCard_Automatic":

        offersBase();
        offer10();

    break
        case "brpt48_creditCard_Manual":

        offersBase();
        offer10da();

    break
        case "brpt48_creditCard_Single":

        offersBase();
        offer10();

    break
        case "brpt48_creditCard_semiAutomatic":

        offersBase();
        offer10da();


    break
        case "brpt48_boleto_Manual":

        offersBase();
        offer10da();


    break
        case "brpt48_boleto_Single":

        offersBase();
        offer10();



    break
        case "brpt48_bankTransfer_Single":

        offersBase();
        offer10();


    break
        case "brpt48_paypalPagsguro_Automatic":

        offersBase();
        offer10();

    break
        case "brpt48_paypalPagsguro_Single":

        offersBase();
        offer10();

        // aqui terminar o ciclo de condições
    break
        case "brpt100_creditCard_Automatic":

         offersBase();
         offer10();

    break
        case "brpt100_creditCard_Manual":

        offersBase();
        offer10da();

    break
        case "brpt100_creditCard_Single":

        offersBase();
        offer10();
    break
        case "brpt100_creditCard_semiAutomatic":

        offersBase();
        offer10da();


    break
        case "brpt100_boleto_Manual":

        offersBase();
        offer10da();


    break
        case "brpt100_boleto_Single":

        offersBase();



    break
        case "brpt100_bankTransfer_Single":

        offersBase();
        offer10();


    break
        case "brpt100_paypalPagsguro_Automatic":

        offersBase();
        offer10();

    break
        case "brpt100_paypalPagsguro_Single":

        offersBase();
        offer10();

        // aqui terminar o ciclo de condições
    break

    }
    
}

//================================================================================

//  ***** Apaga as checkBox das tela *****

function clear(){
    document.getElementById("bonusPL").innerHTML = "";
    document.getElementById("bonusMonths").innerHTML = "";
    document.getElementById("bonusRescue").innerHTML = "";

    document.getElementById("offer10").innerHTML = "";
    document.getElementById("offer10da").innerHTML = "";

    document.getElementById("botao").innerHTML = "";

}

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
    nome.textContent = "PL bonus"
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
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Months bonus"
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
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Resgate de Aulas"
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
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Multa de 10% autorizada."
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
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Multa de 10% não autorizada."
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
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Primeira parcela com 1 real"
    // Coloca o CheckBox no elemento Pai
    bonus1real.appendChild(checkBoxe);
    // Atribui o texto 
    bonus1real.appendChild(nome)
}

// ***** Cria as Check Box com as ofertas *****
function botao(){
    var  botaopai = document.getElementById("botao");

    var botaoinput = document.createElement("button");
    botaoinput.setAttribute("id", "botaoinput")

    botaoinput.textContent = "Verificar"

    botaopai.appendChild(botaoinput);
}

//================================================================================
function alerta(){
    // Checa que se a caixa esta selecionada ou não
    var falso = document.getElementById("inputbonusPL").checked

    alert(falso)
}