//          Cria o Pagamento apos selecionar o Curso 123
function changeSelect(){

    var curso = document.getElementById("curso"); // variavel curso recebe do documento o ID curso
    var pagamento = document.getElementById("pagamento"); //variavel pagamento recebe do documento o ID pagamento

    var valor = curso.options[curso.selectedIndex].value; // valor recebe nas opções de curso o valor o item selecionado

    // remover os itens
    var length = pagamento.options.length; //quantidade recebe a quantidade de opções no pagamento
    var i; // cria a variavel i
    for(i = pagamento.options.length-1 ; i >= 0 ; i--) // enquanto a quantidade opções no pagamento
    {
        pagamento.remove(i);
    }
    
    if( valor == "brpt12"){

        var opcao = document.createElement("option");
        opcao.value = "Selecione o Pagamento";
        opcao.text = "Selecione o Pagamento";

        var opcao1 = document.createElement("option");
        opcao1.value = "Single";
        opcao1.text = "Single";

        var opcao2 = document.createElement("option");
        opcao2.value = "Manual";
        opcao2.text = "Manual";

        var opcao3 = document.createElement("option");
        opcao3.value = "Automatic";
        opcao3.text = "Automatic";

        var opcao4 = document.createElement("option");
        opcao4.value = "semiAutomatic";
        opcao4.text = "Semi Automatic";

        pagamento.add(opcao);
        pagamento.add(opcao1);
        pagamento.add(opcao2);
        pagamento.add(opcao3);
        pagamento.add(opcao4);


    } else if (valor == "brpt24"){

        var opcao = document.createElement("option");
        opcao.value = "Selecione o Pagamento";
        opcao.text = "Selecione o Pagamento";

        var opcao11 = document.createElement("option");
        opcao11.value = "Single";
        opcao11.text = "Single";

        var opcao12 = document.createElement("option");
        opcao12.value = "Manual";
        opcao12.text = "Manual";

        var opcao13 = document.createElement("option");
        opcao13.value = "Automatic";
        opcao13.text = "Automatic";

        var opcao14 = document.createElement("option");
        opcao14.value = "semiAutomatic";
        opcao14.text = "Semi Automatic";

        pagamento.add(opcao);
        pagamento.add(opcao11);
        pagamento.add(opcao12);
        pagamento.add(opcao13);
        pagamento.add(opcao14);

    } else if (valor == "brpt48"){

        var opcao = document.createElement("option");
        opcao.value = "Selecione o Pagamento";
        opcao.text = "Selecione o Pagamento";

        var opcao21 = document.createElement("option");
        opcao21.value = "Single";
        opcao21.text = "Single";

        var opcao22 = document.createElement("option");
        opcao22.value = "Manual";
        opcao22.text = "Manual";

        var opcao23 = document.createElement("option");
        opcao23.value = "Automatic";
        opcao23.text = "Automatic";

        var opcao24 = document.createElement("option");
        opcao24.value = "semiAutomatic";
        opcao24.text = "Semi Automatic";

        pagamento.add(opcao);
        pagamento.add(opcao21);
        pagamento.add(opcao22);
        pagamento.add(opcao23);
        pagamento.add(opcao24);
        
    } else if (valor == "brpt100") {

        var opcao = document.createElement("option");
        opcao.value = "Selecione o Pagamento";
        opcao.text = "Selecione o Pagamento";

        var opcao31 = document.createElement("option");
        opcao31.value = "Single";
        opcao31.text = "Single";

        var opcao32 = document.createElement("option");
        opcao32.value = "Manual";
        opcao32.text = "Manual";

        var opcao33 = document.createElement("option");
        opcao33.value = "Automatic";
        opcao33.text = "Automatic";

        var opcao34 = document.createElement("option");
        opcao34.value = "semiAutomatic";
        opcao34.text = "Semi Automatic";

        pagamento.add(opcao);
        pagamento.add(opcao31);
        pagamento.add(opcao32);
        pagamento.add(opcao33);
        pagamento.add(opcao34);
    }
}

//================================================================================
//          Compara Curso e Pagamento (Mostra as Checkbox )

function ofertaCurso(){
    var curso = document.getElementById("curso").value;
    var pagamento = document.getElementById("pagamento").value;
    limpa();
    var cursoPag = curso +"_"+ pagamento;

    switch(cursoPag){
        case "brpt12_Single":

        baseOfertas();
        bonusBol10();


        botao();
    break
        case "brpt12_Manual":

        baseOfertas();
        bonus1real();

        botao();
    break
        case "brpt12_Automatic":

        baseOfertas();

        botao();
    break
        case "brpt12_semiAutomatic":

        baseOfertas();

        botao();
    break
        case "brpt24_Single":

        baseOfertas();

        botao();
    break
        case "brpt24_Manual":

        baseOfertas();
        bonus1real();

        botao();
    break
        case "brpt24_Automatic":

        baseOfertas();

        botao();
    break
        case "brpt24_semiAutomatic":

        baseOfertas();

        botao();
    break
        case "brpt48_semiAutomatic":

        baseOfertas();

        botao();
    break
        case "brpt24_Single":

        baseOfertas();

        botao();
    break
        case "brpt48_Manual":

        baseOfertas();
        bonus1real();

        botao();
    break
        case "brpt48_Automatic":
        
        baseOfertas();

        botao();
    break
        case "brpt48_semiAutomatic":

        baseOfertas();

        botao();
    break
        case "brpt100_Single":

        baseOfertas();

        botao();
    break
        case "brpt100_Manual":

        baseOfertas();
        bonus1real();

        botao();
    break
        case "brpt100_Automatic":

        baseOfertas();

        botao();
    break
        case "brpt100_semiAutomatic":

        baseOfertas();

        botao();
    }
    
    
}

//================================================================================
//          Limpa o texto 

function limpa(){
    document.getElementById("bonusPL").innerHTML = "";
    document.getElementById("bonusMonths").innerHTML = "";
    document.getElementById("bonusRescue").innerHTML = "";
    document.getElementById("multa10").innerHTML = "";

    document.getElementById("bonusBol10").innerHTML = "";
    document.getElementById("bonus1real").innerHTML = "";

    document.getElementById("botao").innerHTML = "";

}

//================================================================================
//          Criação das Checkbox de Oferta

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
function multa10(){
    // seleciona o elemento pai
    var multa10 = document.getElementById("multa10");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Multa de 10%"
    // Coloca o CheckBox no elemento Pai
    multa10.appendChild(checkBoxe);
    // Atribui o texto 
    multa10.appendChild(nome)
}

function baseOfertas(){
    bonusPL();
    bonusMonths();
    bonusRescue();
    multa10();
}

function bonusBol10(){
    // seleciona o elemento pai
    var bonusBol10 = document.getElementById("bonusBol10");
    //cria o elemento e seleciona o atribudo checkbox
    var checkBoxe = document.createElement("input");
    checkBoxe.setAttribute("type", "checkbox");
    // Adiciona o elemento para adicionar o texto no checkbox
    var nome = document.createElement("label");
    // Insere o texto no elemento criado
    nome.textContent = "Boleto em mais de 10 parcelas"
    // Coloca o CheckBox no elemento Pai
    bonusBol10.appendChild(checkBoxe);
    // Atribui o texto 
    bonusBol10.appendChild(nome)
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