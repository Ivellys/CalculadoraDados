// função que executará um som que será identificado pelo parâmetro de entrada
function playSound(audioId) {
    document.querySelector(audioId).play();
}


// Referência constante recebe a seleção dos botões
// querySelectorAll: seleciona todos os elementos contidos no parâmetros
const buttonList = document.querySelectorAll('.tecla');
buttonList[0].onclick = playSound;
// Estrutura de repetição
//referência variável chama let
let counter = 0;
while (counter < buttonList.length) {
    /* function é uma função genérica criada somente
    neste contexto para atribuir a uma constante
    */
    const tecla = buttonList[counter];
    const instrumento = tecla.classList[1];
    // template string: `#som_${instrumento}`
    const audioId = `#som_${instrumento}`;
    tecla.onclick = function(){
        playSound(audioId);
    };
    console.log(audioId);
    counter = (counter + 1);
    
}