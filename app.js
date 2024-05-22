let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio() 
let tentativas = 1

function gerarNumeroAleatorio() {

  let numeroEscolhido = parseInt( Math.random() * 10 + 1 )
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.lenght 

  if (quantidadeDeElementosNaLista == 10){
    quantidadeDeElementosNaLista [] 
  }
  
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio()
  }else { 
    listaDeNumerosSorteados.push(numeroEscolhido)
  //aqui na linha de cima eu quis adicionar o numeroEscolhido ou o numero gerado aleatorio a lista de numeros sorteados por isso usei o PUSH
  console.log(listaDeNumerosSorteados)
  return numeroEscolhido
 }

function exibirTextoNaTela (tag,texto){
  let campo = document.querySelector (tag) ;
  campo.innerHTML = texto  ; 

}

function exibirMensagemInicial () {
  exibirTextoNaTela('h1', 'Jogo do número secreto') ;
exibirTextoNaTela('p' , 'esolha um número de 1 a 10 ')
};

  

function verificarChute() {
  let chute = document.querySelector('input').value;
 
   if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 

    let mensagemParaUsuario = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
  

    exibirTextoNaTela('p', `${mensagemParaUsuario}`);

    document.getElementById ('reiniciar').removeAttribute ('disabled');

  } else {
    if ( chute > numeroSecreto){
      exibirTextoNaTela('p', ' O número é menor que o chute')}
      else { 
        exibirTextoNaTela('p', 'o número é maior que o chute')
      }
    tentativas++ 
    limparCampo()
  }

}

function limparCampo() {
  chute = document.querySelector ('input');
  chute.value = ''; 
  
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas=1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true); 
}