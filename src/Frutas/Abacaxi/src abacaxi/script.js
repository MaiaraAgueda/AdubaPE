function calcularEArmazenar() {
    calcularCalagem();
    calcularNitrogenio();
    calcularFosforo();
    calcularPotassio();
    armazenarValor();
}

function calcularCalagem() {
    // obter valores dos campos de entrada
    const aluminio = parseFloat(document.getElementById('aluminio').value);
    const calcio = parseFloat(document.getElementById('calcio').value);
    const magnesio = parseFloat(document.getElementById('magnesio').value);
    const argila = parseFloat(document.getElementById('argila').value);
    const prnt = parseFloat(document.getElementById('prnt').value);
    const p = parseFloat(document.getElementById('p').value);
    const k = parseFloat(document.getElementById('k').value);


    // calcular quantidade necessária de calcário
    let f;
    if (argila < 15) {
        f = 1.5;
    } else if (argila < 35) {
        f = 2;
    } else {
        f = 2.5;
    }
    const al_necessario = Math.max(f * aluminio, f * (2 - (calcio + magnesio)));
    const calcario_necessario = (100 / prnt) * al_necessario;


    // exibir resultado da Calagem
    document.getElementById('calcario').innerHTML = calcario_necessario.toFixed(2) + " T/ha";

}

function calcularNitrogenio() {
    //Calculos Nitrogenio
    // Dados recomendação de nitrogênio em kg/ha
    const n1_2 = 75;
    const n5_6 = 85;
    const n8_9 = 90;


    //Conversao de nitrogênio de kg/ha para g/plantas
    var espacamento = document.querySelector('input[name="opcao"]:checked').value;

    var n1 = (n1_2 * 1000) / espacamento;
    var n2 = (n5_6 * 1000) / espacamento;
    var n3 = (n8_9 * 1000) / espacamento;


    // Exibir recomendação de nitrogênio
    document.getElementById('nitro1-2').innerHTML = n1_2 + " kg/ha" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + n1.toFixed(1) + " g/plantas";
    document.getElementById('nitro5-6').innerHTML = n5_6 + " kg/ha" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + n2.toFixed(1) + " g/plantas";
    document.getElementById('nitro8-9').innerHTML = n8_9 + " kg/ha" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + n3.toFixed(1) + " g/plantas";

    //Calculos Ureia
    //transformando de N para Ureia(kg/ha)
    var porcentagemU = 44; // esta variavel é a porcentagem de nitrogenio que a ureia tem

    var ureia1 = (100 * n1_2) / porcentagemU;
    var ureia2 = (100 * n5_6) / porcentagemU;
    var ureia3 = (100 * n8_9) / porcentagemU;

    //Conversao de Ureia de kg/ha para g/plantas
    var u1 = (ureia1 * 1000) / espacamento;
    var u2 = (ureia2 * 1000) / espacamento;
    var u3 = (ureia3 * 1000) / espacamento;

    // Exibir recomendação de Ureia
    document.getElementById('ureia1-2').innerHTML = ureia1.toFixed(2) + " kg/ha" + "&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp" + u1.toFixed(2) + " g/plantas";
    document.getElementById('ureia5-6').innerHTML = ureia2.toFixed(2) + " kg/ha" + "&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp" + u2.toFixed(2) + " g/plantas";
    document.getElementById('ureia8-9').innerHTML = ureia3.toFixed(2) + " kg/ha" + "&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp" + u3.toFixed(2) + " g/plantas";



    //Calculos Sulfato de amônio
    //transformando de N para Sulfato de Amonio(kg/ha)
    var porcentagemSA = 20; // esta variavel é a porcentagem de nitrogenio que o Sulfato de amônio tem

    var amonia1 = (100 * n1_2) / porcentagemSA;
    var amonia2 = (100 * n5_6) / porcentagemSA;
    var amonia3 = (100 * n8_9) / porcentagemSA;

    //Conversao de Sulfato de amônio de kg/ha para g/plantas
    var a1 = (amonia1 * 1000) / espacamento;
    var a2 = (amonia2 * 1000) / espacamento;
    var a3 = (amonia3 * 1000) / espacamento;

    // Exibir recomendação de sulfato de amônio
    document.getElementById('amonio1').innerHTML = amonia1.toFixed(2) + " kg/ha" + "&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp" + a1.toFixed(2) + " g/plantas";
    document.getElementById('amonio2').innerHTML = amonia2.toFixed(2) + " kg/ha" + "&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp" + a2.toFixed(2) + " g/plantas";
    document.getElementById('amonio3').innerHTML = amonia3.toFixed(2) + " kg/ha" + "&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp" + a3.toFixed(2) + " g/plantas";


}

function calcularFosforo() {
    // obter valores dos campos de entrada
    const aluminio = parseFloat(document.getElementById('aluminio').value);
    const calcio = parseFloat(document.getElementById('calcio').value);
    const magnesio = parseFloat(document.getElementById('magnesio').value);
    const argila = parseFloat(document.getElementById('argila').value);
    const prnt = parseFloat(document.getElementById('prnt').value);
    const p = parseFloat(document.getElementById('p').value);
    const k = parseFloat(document.getElementById('k').value);

    var ou = "&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp";//variavei que guarda a formatação para o "ou"

    // Dados recomendação de fosforo em kg/ha
    let msg1_2 = "";
    let msg5_6 = "";
    let msg8_9 = "";


    if (p < 6) {
        msg1_2 = 50;
        msg5_6 = 0;
        msg8_9 = 0;
    } else if (p >= 6 && p <= 10) {
        msg1_2 = 40;
        msg5_6 = 0;
        msg8_9 = 0;
    } else if (p > 10) {
        msg1_2 = 30;
        msg5_6 = 0;
        msg8_9 = 0;
    }

    //Conversao de fosforo de kg/ha para g/plantas
    var espacamento = document.querySelector('input[name="opcao"]:checked').value;

    var p1 = (msg1_2 * 1000) / espacamento;
    var p2 = (msg5_6 * 1000) / espacamento;
    var p3 = (msg8_9 * 1000) / espacamento;


    // Exibir recomendação de fósforo em kg/ha e em g/plantas

    document.getElementById('pmes1-2').innerHTML = msg1_2 + " kg/ha" + ou + p1.toFixed(2) + " g/plantas";
    document.getElementById('pmes5-6').innerHTML = msg5_6 + " kg/ha" + ou + p2.toFixed(2) + " g/plantas";
    document.getElementById('pmes8-9').innerHTML = msg8_9 + " kg/ha" + ou + p3.toFixed(2) + " g/plantas";


    //Calculos  Superfosfato Simples(SFS)
    //transformando de P para Superfosfato Simples(kg/ha)
    var porcentagemSFS = 18; // esta variavel é a porcentagem de nitrogenio que o SFS tem
    var sfs1 = (100 * msg1_2) / porcentagemSFS;
    var sfs2 = (100 * msg5_6) / porcentagemSFS;
    var sfs3 = (100 * msg8_9) / porcentagemSFS;

    //Conversao de Superfosfato Simples(SFS) de kg/ha para g/plantas
    var s1 = (sfs1 * 1000) / espacamento;
    var s2 = (sfs2 * 1000) / espacamento;
    var s3 = (sfs3 * 1000) / espacamento;


    // Exibir recomendação de SFS em kg/ha e em g/plantas
    document.getElementById('sfs1').innerHTML = sfs1.toFixed(2) + " kg/ha" + ou + s1.toFixed(2) + " g/plantas";
    document.getElementById('sfs2').innerHTML = sfs2.toFixed(2) + " kg/ha" + ou + s2.toFixed(2) + " g/plantas";
    document.getElementById('sfs3').innerHTML = sfs3.toFixed(2) + " kg/ha" + ou + s3.toFixed(2) + " g/plantas";


    //Calculos  Superfosfato triplo(SFT)
    //transformando de P para Superfosfato Triplo(kg/ha)
    var porcentagemSFT = 41; // esta variavel é a porcentagem de nitrogenio que o SFT tem
    var sft1 = (100 * msg1_2) / porcentagemSFT;
    var sft2 = (100 * msg5_6) / porcentagemSFT;
    var sft3 = (100 * msg8_9) / porcentagemSFT;


    //Conversao de Superfosfato triplo(SFT) de kg/ha para g/plantas
    var t1 = (sft1 * 1000) / espacamento;
    var t2 = (sft2 * 1000) / espacamento;
    var t3 = (sft3 * 1000) / espacamento;


    // Exibir recomendação de SFT em kg/ha e em g/plantas
    document.getElementById('sft1').innerHTML = sft1.toFixed(2) + " kg/ha" + ou + t1.toFixed(2) + " g/plantas";
    document.getElementById('sft2').innerHTML = sft2.toFixed(2) + " kg/ha" + ou + t2.toFixed(2) + " g/plantas";
    document.getElementById('sft3').innerHTML = sft3.toFixed(2) + " kg/ha" + ou + t3.toFixed(2) + " g/plantas";




}
function calcularPotassio() {
    // obter valores dos campos de entrada
    const aluminio = parseFloat(document.getElementById('aluminio').value);
    const calcio = parseFloat(document.getElementById('calcio').value);
    const magnesio = parseFloat(document.getElementById('magnesio').value);
    const argila = parseFloat(document.getElementById('argila').value);
    const prnt = parseFloat(document.getElementById('prnt').value);
    const p = parseFloat(document.getElementById('p').value);
    const k = parseFloat(document.getElementById('k').value);

    var ou = "&nbsp;&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;&nbsp";//variavei que guarda a formatação para o "ou"


    // Dados recomendação de Potássio em kg/ha
    let Kmsg1_2 = "";
    let Kmsg5_6 = "";
    let Kmsg8_9 = "";


    if (k < 0.08) {
        Kmsg1_2 = 50;
        Kmsg5_6 = 60;
        Kmsg8_9 = 70;
    } else if (k >= 0.08 && k <= 0.15) {
        Kmsg1_2 = 40;
        Kmsg5_6 = 50;
        Kmsg8_9 = 60;
    } else if (k > 0.15) {
        Kmsg1_2 = 30;
        Kmsg5_6 = 40;
        Kmsg8_9 = 50;
    }

    //Conversao de potassio de kg/ha para g/plantas
    var espacamento = document.querySelector('input[name="opcao"]:checked').value;

    var k1 = (Kmsg1_2 * 1000) / espacamento;
    var k2 = (Kmsg5_6 * 1000) / espacamento;
    var k3 = (Kmsg8_9 * 1000) / espacamento;

    // Exibir recomendação de Potássio
    document.getElementById('kmes1-2').innerHTML = Kmsg1_2.toFixed(2) + " kg/ha" + ou + k1.toFixed(2) + " g/plantas";
    document.getElementById('kmes5-6').innerHTML = Kmsg5_6.toFixed(2) + " kg/ha" + ou + k2.toFixed(2) + " g/plantas";
    document.getElementById('kmes8-9').innerHTML = Kmsg8_9.toFixed(2) + " kg/ha" + ou + k3.toFixed(2) + " g/plantas";



    //Calculos sulfato de potássio(SP)
    //transformando de Potassio(K) para sulfato de potássio(SP) em kg/ha
    var porcentagemSP = 48; // esta variavel é a porcentagem de nitrogenio que o SP tem
    var sp1 = (100 * Kmsg1_2) / porcentagemSP;
    var sp2 = (100 * Kmsg5_6) / porcentagemSP;
    var sp3 = (100 * Kmsg8_9) / porcentagemSP;

    //Conversao de sulfato de potássio(SP) de kg/ha para g/plantas
    var sulfato1 = (sp1 * 1000) / espacamento;
    var sulfato2 = (sp2 * 1000) / espacamento;
    var sulfato3 = (sp3 * 1000) / espacamento;

    // Exibir recomendação de sulafto de potassio
    document.getElementById('sulfato1').innerHTML = sp1.toFixed(2) + " kg/ha" + ou + sulfato1.toFixed(2) + " g/plantas";
    document.getElementById('sulfato2').innerHTML = sp2.toFixed(2) + " kg/ha" + ou + sulfato2.toFixed(2) + " g/plantas";
    document.getElementById('sulfato3').innerHTML = sp3.toFixed(2) + " kg/ha" + ou + sulfato3.toFixed(2) + " g/plantas";


    //Calculos cloreto de potássio(CP)
    //transformando de Potassio(K) para sulfato de potássio(SP) em kg/ha
    var porcentagemCP = 58; // esta variavel é a porcentagem de nitrogenio que o SP tem
    var cp1 = (100 * Kmsg1_2) / porcentagemCP;
    var cp2 = (100 * Kmsg5_6) / porcentagemCP;
    var cp3 = (100 * Kmsg8_9) / porcentagemCP;

    //Conversao de sulfato de potássio(SP) de kg/ha para g/plantas
    var cloreto1 = (cp1 * 1000) / espacamento;
    var cloreto2 = (cp2 * 1000) / espacamento;
    var cloreto3 = (cp3 * 1000) / espacamento;

    // Exibir recomendação de sulafto de potassio
    document.getElementById('cloreto1').innerHTML = cp1.toFixed(2) + " kg/ha" + ou + cloreto1.toFixed(2) + " g/plantas";
    document.getElementById('cloreto2').innerHTML = cp2.toFixed(2) + " kg/ha" + ou + cloreto2.toFixed(2) + " g/plantas";
    document.getElementById('cloreto3').innerHTML = cp3.toFixed(2) + " kg/ha" + ou + cloreto3.toFixed(2) + " g/plantas";
}

function armazenarValor() {
    // Obtém o valor selecionado pelo usuário
    var opcaoSelecionada = document.querySelector('input[name="opcao"]:checked').value;

    // Armazena o valor em uma variável ou faz qualquer outra ação necessária
    document.getElementById('numPlantas').innerHTML = opcaoSelecionada + " pl/ha";
}

function gerarPDF() {
    // Cria um novo objeto jsPDF
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor("#333333");


    var textoHTML = document.getElementById("meuTexto").innerText;
    doc.text(textoHTML, 10, 10);



    // Adiciona um texto ao documento PDF
    //	doc.text("Meu primeiro arquivo PDF gerado com jsPDF", 10, 10);

    // Salva o arquivo PDF
    doc.save("arquivo.pdf");
}

function copiarTexto() {
    // seleciona o elemento que contém o texto a ser copiado
    const elemento = document.getElementById("meuTexto");

    // cria um range de seleção para o conteúdo do elemento
    const range = document.createRange();
    range.selectNodeContents(elemento);

    // seleciona o conteúdo do range
    const selecao = window.getSelection();
    selecao.removeAllRanges();
    selecao.addRange(range);

    // copia o texto selecionado para a área de transferência
    document.execCommand("copy");

    // limpa a seleção
    selecao.removeAllRanges();

    // exibe uma mensagem de confirmação
    alert("O texto foi copiado para a área de transferência!");
}

function esconder() {
    var botao = document.getElementById("calcBotao");
    var minhaDiv = document.getElementById("minhaDiv");
    var meuTexto = document.getElementById("meuTexto");

    minhaDiv.classList.add("escondida");
    meuTexto.classList.remove("escondida");
}

var botao = document.getElementById("calcBotao");
botao.addEventListener("click", esconder);

function recargar() {
    var botaoRecarregar = document.getElementById("botaoRecarregar");

    botaoRecarregar.addEventListener("click", function () {
        location.reload();
    });


}


function mostrarDivNitrogenio(opcao) {
    // Oculta todas as divs exceto a div de calagem
    var divNitrogenio = document.getElementById('nitrogenio');
    var divUreia = document.getElementById('ureia');
    var divSulfatoAmonio = document.getElementById('sulfatoAmonio');
    divNitrogenio.style.display = 'none';
    divUreia.style.display = 'none';
    divSulfatoAmonio.style.display = 'none';

    // Mostra a div correspondente à opção selecionada
    if (opcao === "2") {
        divUreia.style.display = 'block';
    } else if (opcao === "3") {
        divSulfatoAmonio.style.display = 'block';
    } else {
        divNitrogenio.style.display = 'block';
    }
}

function mostrarDivFosforo(opcao) {
    // Oculta todas as divs exceto a div de calagem
    var divFosforo = document.getElementById('fosforo');
    var divSFS = document.getElementById('SFS');
    var divSFT = document.getElementById('SFT');
    divFosforo.style.display = 'none';
    divSFS.style.display = 'none';
    divSFT.style.display = 'none';

    // Mostra a div correspondente à opção selecionada
    if (opcao === "2") {
        divSFS.style.display = 'block';
    } else if (opcao === "3") {
        divSFT.style.display = 'block';
    } else {
        divFosforo.style.display = 'block';
    }
}

function mostrarDivPotassio(opcao) {
    // Oculta todas as divs exceto a div de calagem
    var divPotassio = document.getElementById('potassio');
    var divSulfatoPotassio = document.getElementById('sulfatoPotassio');
    var divCloretoPotassio = document.getElementById('cloretoPotassio');
    divPotassio.style.display = 'none';
    divSulfatoPotassio.style.display = 'none';
    divCloretoPotassio.style.display = 'none';

    // Mostra a div correspondente à opção selecionada
    if (opcao === "2") {
        divSulfatoPotassio.style.display = 'block';
    } else if (opcao === "3") {
        divCloretoPotassio.style.display = 'block';
    } else {
        divPotassio.style.display = 'block';
    }
}
